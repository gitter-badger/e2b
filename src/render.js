let consts = require('./consts');
let { Instruction, transformPoints, cycleMouseData } = require('e2d');

let identity = [1, 0, 0, 1, 0, 0],
  matrix = new Float64Array(identity),
  fillStyleStack = [],
  strokeStyleStack = [],
  lineStyleStack = [],
  textStyleStack = [],
  shadowStyleStack = [],
  globalCompositeOperationStack = [],
  globalAlphaStack = [],
  imageSmoothingEnabledStack = [],
  transformStack = new Float64Array(501 * 6),
  transformStackIndex = 6,
  concat = [].concat,
  supportsEllipse = false;

if (typeof CanvasRenderingContext2D !== 'undefined') {
  supportsEllipse = CanvasRenderingContext2D.prototype.hasOwnProperty('ellipse');
}

const increaseTransformStackSize = () => {
  let cache = transformStack;
  transformStack = new Float64Array(transformStack.length + 600); //add 100 more
  transformStack.set(cache);
  return this;
};

transformStack.set(identity);

const PI2 = Math.PI * 2;

let empty = (target) => target && target.splice(0, target.length);

//property indexes
let lineCapProps = require('./lineCapProps');
let lineJoinProps = require('./lineJoinProps');
let textBaselineProps = require('./textBaselineProps');
let textAlignProps = require('./textAlignProps');
let directionProps = require('./directionProps');
let globalCompositeOperationProps = require('./globalCompositeOperationProps');

let rects = {
  [consts.fillRect]: 'fillRect',
  [consts.strokeRect]: 'strokeRect',
  [consts.clearRect]: 'clearRect',
  [consts.rect]: 'rect'
};

let texts = {
  [consts.fillText]: 'fillText',
  [consts.strokeText]: 'strokeText',
};

let pointLabel = {
  [consts.moveTo]: 'moveTo',
  [consts.lineTo]: 'lineTo'
};

let getString = require('./getString');

let getArray = require('./getArray');

let deserialize = (data, ctx) => {

  for(let i = 0; i < data.length;) {
    let command = data[i];

      let regions = ctx.canvas[Symbol.for('regions')],
        mousePoints = ctx.canvas[Symbol.for('mousePoints')],
        extensions = ctx.canvas[Symbol.for('extensions')];

      let cache;

      cycleMouseData(ctx);

      empty(regions);
      empty(mousePoints);


    if (command === consts.transform) {
      //copy transformStack values to matrix
      matrix[0] = transformStack[transformStackIndex - 6];
      matrix[1] = transformStack[transformStackIndex - 5];
      matrix[2] = transformStack[transformStackIndex - 4];
      matrix[3] = transformStack[transformStackIndex - 3];
      matrix[4] = transformStack[transformStackIndex - 2];
      matrix[5] = transformStack[transformStackIndex - 1];

      //increase the index
      transformStackIndex += 6;
      if (transformStackIndex > transformStack.length) {
        increaseTransformStackSize();
      }

      //perform the transform math
      transformStack[transformStackIndex - 6] = //d
        matrix[0] * data[i + 1] + matrix[2] * data[i + 2];
      transformStack[transformStackIndex - 5] = //b
        matrix[1] * data[i + 1] + matrix[3] * data[i + 2];
      transformStack[transformStackIndex - 4] = //c
        matrix[0] * data[i + 3] + matrix[2] * data[i + 4];
      transformStack[transformStackIndex - 3] = //d
        matrix[1] * data[i + 3] + matrix[3] * data[i + 4];
      transformStack[transformStackIndex - 2] = //e
        matrix[0] * data[i + 5] + matrix[2] * data[i + 6] + matrix[4];
      transformStack[transformStackIndex - 1] = //f
        matrix[1] * data[i + 5] + matrix[3] * data[i + 6] + matrix[5];

      //modify the ctx
      ctx.setTransform(
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      );
      i += 7;
      continue;
    }

    if (command === consts.setTransform) {
      transformStackIndex += 6;
      if (transformStackIndex > transformStack.length) {
        increaseTransformStackSize();
      }

      transformStack[transformStackIndex - 6] = data[i + 1];//a
      transformStack[transformStackIndex - 5] = data[i + 2];//b
      transformStack[transformStackIndex - 4] = data[i + 3];//c
      transformStack[transformStackIndex - 3] = data[i + 4];//d
      transformStack[transformStackIndex - 2] = data[i + 5];//e
      transformStack[transformStackIndex - 1] = data[i + 6];//f
      ctx.setTransform(
        data[i + 1],
        data[i + 2],
        data[i + 3],
        data[i + 4],
        data[i + 5],
        data[i + 6]
      );

      i += 7;
      continue;
    }

    if (command === consts.scale) {

      matrix[0] = transformStack[transformStackIndex - 6];
      matrix[1] = transformStack[transformStackIndex - 5];
      matrix[2] = transformStack[transformStackIndex - 4];
      matrix[3] = transformStack[transformStackIndex - 3];
      matrix[4] = transformStack[transformStackIndex - 2];
      matrix[5] = transformStack[transformStackIndex - 1];

      transformStackIndex += 6;
      if (transformStackIndex > transformStack.length) {
        increaseTransformStackSize();
      }

      transformStack[transformStackIndex - 6] = matrix[0] * data[i + 1]; //a
      transformStack[transformStackIndex - 5] = matrix[1] * data[i + 1]; //b
      transformStack[transformStackIndex - 4] = matrix[2] * data[i + 2]; //c
      transformStack[transformStackIndex - 3] = matrix[3] * data[i + 2]; //d
      transformStack[transformStackIndex - 2] = matrix[4]; //e
      transformStack[transformStackIndex - 1] = matrix[5]; //f

      ctx.setTransform(
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      );

      i += 3;
      continue;
    }

    if (command === consts.translate) {

      matrix[0] = transformStack[transformStackIndex - 6];
      matrix[1] = transformStack[transformStackIndex - 5];
      matrix[2] = transformStack[transformStackIndex - 4];
      matrix[3] = transformStack[transformStackIndex - 3];
      matrix[4] = transformStack[transformStackIndex - 2];
      matrix[5] = transformStack[transformStackIndex - 1];

      transformStackIndex += 6;
      if (transformStackIndex > transformStack.length) {
        increaseTransformStackSize();
      }

      transformStack[transformStackIndex - 6] = matrix[0]; //a
      transformStack[transformStackIndex - 5] = matrix[1]; //b
      transformStack[transformStackIndex - 4] = matrix[2]; //c
      transformStack[transformStackIndex - 3] = matrix[3]; //d
      transformStack[transformStackIndex - 2] = matrix[4] + matrix[0] * data[i + 1] + matrix[2] * data[i + 2]; //e
      transformStack[transformStackIndex - 1] = matrix[5] + matrix[1] * data[i + 1] + matrix[3] * data[i + 2]; //f

      ctx.setTransform(
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      );

      i += 3;
      continue;
    }

    if (command === consts.rotate) {
      matrix[0] = transformStack[transformStackIndex - 6];
      matrix[1] = transformStack[transformStackIndex - 5];
      matrix[2] = transformStack[transformStackIndex - 4];
      matrix[3] = transformStack[transformStackIndex - 3];
      matrix[4] = transformStack[transformStackIndex - 2];
      matrix[5] = transformStack[transformStackIndex - 1];

      transformStackIndex += 6;
      if (transformStackIndex > transformStack.length) {
        increaseTransformStackSize();
      }

      transformStack[transformStackIndex - 6] =
        matrix[0] * data[i + 1] + matrix[2] * data[i + 2]; //a
      transformStack[transformStackIndex - 5] =
        matrix[1] * data[i + 1] + matrix[3] * data[i + 2]; //b
      transformStack[transformStackIndex - 4] =
        matrix[0] * -data[i + 2] + matrix[2] * data[i + 1]; //c
      transformStack[transformStackIndex - 3] =
        matrix[1] * -data[i + 2] + matrix[3] * data[i + 1]; //d
      transformStack[transformStackIndex - 2] = matrix[4]; //e
      transformStack[transformStackIndex - 1] = matrix[5];//f

      ctx.setTransform(
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      );

      i += 3;
      continue;
    }

    if (command === consts.skewX) {
      matrix[0] = transformStack[transformStackIndex - 6];
      matrix[1] = transformStack[transformStackIndex - 5];
      matrix[2] = transformStack[transformStackIndex - 4];
      matrix[3] = transformStack[transformStackIndex - 3];
      matrix[4] = transformStack[transformStackIndex - 2];
      matrix[5] = transformStack[transformStackIndex - 1];

      transformStackIndex += 6;
      if (transformStackIndex > transformStack.length) {
        increaseTransformStackSize();
      }

      transformStack[transformStackIndex - 6] = matrix[0]; //a
      transformStack[transformStackIndex - 5] = matrix[1]; //b
      transformStack[transformStackIndex - 4] = //c
        matrix[0] * data[i + 1] + matrix[2];
      transformStack[transformStackIndex - 3] = //d
        matrix[1] * data[i + 1] + matrix[3];
      transformStack[transformStackIndex - 2] = matrix[4]; //e
      transformStack[transformStackIndex - 1] = matrix[5]; //f


      ctx.setTransform(
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      );

      i += 2;
      continue;
    }

    if (command === consts.skewY) {
     matrix[0] = transformStack[transformStackIndex - 6];
      matrix[1] = transformStack[transformStackIndex - 5];
      matrix[2] = transformStack[transformStackIndex - 4];
      matrix[3] = transformStack[transformStackIndex - 3];
      matrix[4] = transformStack[transformStackIndex - 2];
      matrix[5] = transformStack[transformStackIndex - 1];

      transformStackIndex += 6;
      if (transformStackIndex > transformStack.length) {
        increaseTransformStackSize();
      }

      transformStack[transformStackIndex - 6] =
        matrix[0] * 1 + matrix[2] * data[i + 1]; //a
      transformStack[transformStackIndex - 5] =
        matrix[1] * 1 + matrix[3] * data[i + 1]; //b
      transformStack[transformStackIndex - 4] = matrix[2]; //c
      transformStack[transformStackIndex - 3] = matrix[3]; //d

      transformStack[transformStackIndex - 2] = matrix[4]; //e
      transformStack[transformStackIndex - 1] = matrix[5]; //f

      ctx.setTransform(
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      );
      i += 2;
      continue;
    }

    if (command === consts.restore) {
      transformStackIndex -= 6;
      matrix[0] = transformStack[transformStackIndex - 6];
      matrix[1] = transformStack[transformStackIndex - 5];
      matrix[2] = transformStack[transformStackIndex - 4];
      matrix[3] = transformStack[transformStackIndex - 3];
      matrix[4] = transformStack[transformStackIndex - 2];
      matrix[5] = transformStack[transformStackIndex - 1];

      ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      i += 1;
      continue;
    }

    //fillRect, strokeRect, rect
    if (rects[command]) {
      ctx[rects[command]](data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
      i += 5;
      continue;
    }

    if (command === consts.fillStyle) {
      fillStyleStack.push(ctx.fillStyle);
      ctx.fillStyle = getString(data, i + 2, data[i + 1]);
      i += 2 + data[i + 1];
      continue;
    }

    if (command === consts.strokeStyle) {
      strokeStyleStack.push(ctx.strokeStyle);
      ctx.strokeStyle = getString(data, i + 2, data[i + 1]);
      i += 2 + data[i + 1];
      continue;
    }

    if (command === consts.endFillStyle) {
      ctx.fillStyle = fillStyleStack.pop();
      i += 1;
      continue;
    }

    if (command === consts.endStrokeStyle) {
      ctx.strokeStyle = strokeStyleStack.pop();
      i += 1;
      continue;
    }

    if (command === consts.lineStyle) {
      lineStyleStack.push({
        lineWidth: ctx.lineWidth,
        lineCap: ctx.lineCap,
        lineJoin: ctx.lineJoin,
        miterLimit: ctx.miterLimit,
        lineDash: ctx.getLineDash(),
        lineDashOffset: ctx.lineDashOffset
      });

      if (!isNaN(data[i + 1])) {
        ctx.lineWidth = data[i + 1];
      }
      if (!isNaN(data[i + 2])) {
        ctx.lineCap = lineCapProps[data[i + 2]];
      }
      if (!isNaN(data[i + 3])) {
        ctx.lineJoin = lineJoinProps[data[i + 3]];
      }
      if (!isNaN(data[i + 4])) {
        ctx.miterLimit = data[i + 4];
      }
      if (!isNaN(data[i + 6])) {
        ctx.setLineDash(getArray(data, i + 7, data[i + 6]));
      }
      if (!isNaN(data[i + 5])) {
        ctx.lineDashOffset = data[i + 5];
      }

      i += 7 + (!isNaN(data[i + 6]) ? data[i + 6]: 0);
      continue;
    }

    if (command === consts.endLineStyle) {
      cache = lineStyleStack.pop();
      ctx.lineWidth = cache.lineWidth;
      ctx.lineCap = cache.lineCap;
      ctx.lineJoin = cache.lineJoin;
      ctx.miterLimit = cache.miterLimit;
      ctx.setLineDash(cache.lineDash);
      ctx.lineDashOffset = cache.lineDashOffset;

      i += 1;
      continue;
    }

    if (command === consts.textStyle) {
      textStyleStack.push({
        font: ctx.font,
        textAlign: ctx.textAlign,
        textBaseline: ctx.textBaseline,
        direction: ctx.direction
      });
      if (!isNaN(data[i + 4])) {
        ctx.font = getString(data, i + 5, data[i + 4]);
      }
      if (!isNaN(data[i + 1])) {
        ctx.textAlign = textAlignProps[data[i + 1]];
      }
      if (!isNaN(data[i + 2])) {
        ctx.textBaseline = textBaselineProps[data[i + 2]];
      }
      if (!isNaN(data[i + 3])) {
        ctx.direction = directionProps[data[i + 3]];
      }

      i += 5 + (!isNaN(data[i + 4]) ? data[i + 4] : 0);
      continue;
    }

    if (command === consts.endTextStyle) {
      cache = textStyleStack.pop();
      ctx.font = cache.font;
      ctx.textAlign = cache.textAlign;
      ctx.textBaseline = cache.textBaseline;
      ctx.direction = cache.direction;
      i += 1;
      continue;
    }

    if (command === consts.shadowStyle) {
      shadowStyleStack.push({
        shadowBlur: ctx.shadowBlur,
        shadowColor: ctx.shadowColor,
        shadowOffsetX: ctx.shadowOffsetX,
        shadowOffsetY: ctx.shadowOffsetY
      });
      if (!isNaN(data[i + 1])) {
        ctx.shadowBlur = data[i + 1];
      }
      if (!isNaN(data[i + 4])) {
        ctx.shadowColor = getString(data, i + 5, data[i + 4]);
      }
      if (!isNaN(data[i + 2])) {
        ctx.shadowOffsetX = data[i + 2];
      }
      if (!isNaN(data[i + 3])) {
        ctx.shadowOffsetY = data[i + 3];
      }

      i += 5 + (!isNaN(data[i + 4]) ? data[i + 4] : 0);
      continue;
    }

    if (command === consts.endShadowStyle) {
      cache = shadowStyleStack.pop();
      ctx.shadowBlur = cache.shadowBlur;
      ctx.shadowColor = cache.shadowColor;
      ctx.shadowOffsetX = cache.shadowOffsetX;
      ctx.shadowOffsetY = cache.shadowOffsetY;

      i += 1;
      continue;
    }

    //fillText, strokeText
    if (texts[command]) {
      if (!isNaN(data[i + 3])) {
        ctx[texts[command]](getString(data, i + 5, data[i + 4]), data[i + 1], data[i + 2], data[i + 3]);
      } else {
        ctx[texts[command]](getString(data, i + 5, data[i + 4]), data[i + 1], data[i + 2]);
      }
      i += 5 + (!isNaN(data[i + 4]) ? data[i + 4] : 0);
      continue;
    }



    if (command === consts.fillArc) {
      ctx.beginPath();
      ctx.arc(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], !!data[i + 6]);
      ctx.closePath();
      ctx.fill();
      i += 7;
      continue;
    }

    if (command === consts.strokeArc) {
      ctx.beginPath();
      ctx.arc(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], !!data[i + 6]);
      ctx.closePath();
      ctx.arc();
      i += 7;
      continue;
    }

    //moveTo, lineTo
    if (pointLabel[command]) {
      ctx[pointLabel[command]](data[i + 1], data[i + 2]);
      i += 3;
      continue;
    }

    if (command === consts.bezierCurveTo) {
      ctx.bezierCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6]);
      i += 7;
      continue;
    }

    if (command === consts.quadraticCurveTo) {
      ctx.quadraticCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
      i += 5;
      continue;
    }

    if (command === consts.arc) {
      ctx.arc(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], !!data[i + 6]);
      i += 7;
      continue;
    }

    if (command === consts.arcTo) {
      ctx.arcTo(
        data[i + 1],
        data[i + 2],
        data[i + 3],
        data[i + 4],
        data[i + 5]
      );

      i += 6;
      continue;
    }

    if (command === consts.ellipse) {
      //if the method is provided by the browser
      if (supportsEllipse) {
        ctx.ellipse(
          data[i + 1],
          data[i + 2],
          data[i + 3],
          data[i + 4],
          data[i + 5],
          data[i + 6],
          data[i + 7],
          !!data[i + 8]
        );
        continue;
      }
      ctx.save();
      ctx.translate(data[i + 1], data[i + 2]);
      ctx.rotate(data[i + 5]);
      ctx.scale(data[i + 3], data[i + 4]);
      ctx.arc(0, 0, 1, data[i + 6], data[i + 7], !!data[i + 8]);
      ctx.restore();

      i += 9;
      continue;
    }

    if (command === consts.globalCompositeOperation) {
      globalCompositeOperationStack.push(ctx.globalCompositeOperation);
      ctx.globalCompositeOperation = globalCompositeOperationProps[data[i + 1]];

      i += 2;
      continue;
    }

    if (command === consts.endGlobalCompositeOperation) {
      ctx.globalCompositeOperation = globalCompositeOperationStack.pop();
      i += 1;
      continue;
    }

    if (command === consts.fill) {
      ctx.fill();
      i += 1;
      continue;
    }

    if (command === consts.stroke) {
      ctx.stroke();
      i += 1;
      continue;
    }

    if (command === consts.beginClip) {
      ctx.save();
      ctx.beginPath();
      i += 1;
      continue;
    }

    if (command === consts.clip) {
      ctx.clip();
      i += 1;
      continue;
    }

    if (command === consts.endClip) {
      ctx.restore();
      i += 1;
      continue;
    }

    if (command === consts.beginPath) {
      ctx.beginPath();
      i += 1;
      continue;
    }

    if (command === consts.closePath) {
      ctx.closePath();
      i += 1;
      continue;
    }

    if (command === consts.globalAlpha) {
      globalAlphaStack.push(ctx.globalAlpha);
      ctx.globalAlpha *= data[i + 1];
      i += 2;
      continue;
    }

    if (command === consts.endGlobalAlpha) {
      ctx.globalAlpha = globalAlphaStack.pop();
      i += 1;
      continue;
    }

    if (regions && command === consts.hitRect) {
       cache = [
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      ];

      regions.push({
        id: getString(data, i + 6, data[i + 5]),
        points: [
          [data[i + 1], data[i + 2]],
          [data[i + 3], data[i + 4]],
        ],
        matrix: cache,
        //rectangle!
        polygon: false,
        hover: false,
        touched: false,
        clicked: false
      });

      i += 6 + data[i + 5];
      continue;
    }

    if (regions && command === consts.hitRegion) {
      let points = [], len = data[i + 1];
      for(let j = 0; j < len; j++) {
        i += 2;
        points.push(
          [data[i], data[i + 1]]
        );
      }
      i += 2;

      cache = [
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      ];

      regions.push({
        id: getString(data, i + 1, data[i]),
        points,
        matrix: cache,
        polygon: true,
        hover: false,
        touched: false,
        clicked: false
      });

      i += 1 + data[i];
      continue;
    }

    if (command === consts.imageSmoothingEnabled) {
      imageSmoothingEnabledStack.push(ctx.imageSmoothingEnabled);
      ctx.imageSmoothingEnabled = !!data[i + 1];

      i += 2;
      continue;
    }

    if (command === consts.endImageSmoothingEnabled) {
      ctx.imageSmoothingEnabled = imageSmoothingEnabledStack.pop();
      i += 1;
      continue;
    }

    if (command === consts.custom) {
      if (!extensions) {
        throw new Error('Extensions object was falsy, did you forget to provide deserialize methods?');
      }
      let type = getString(data, i + 2, data[i + 1]);
      if (!extensions[type]) {
        throw new Error('Extension serialized but no matching deserialize method provided.');
      }

      i += 2 + data[i + 1];

      //data[i] is count
      //data[i + 1] is first element
      extensions[type](
        data.slice(i + 1, i + 1 + data[i]),
        ctx
      );
      i += 1 + data[i];
    }
  }

  return tree;
};

module.exports = render;