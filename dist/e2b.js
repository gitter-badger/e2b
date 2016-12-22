(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("e2d"));
	else if(typeof define === 'function' && define.amd)
		define(["e2d"], factory);
	else if(typeof exports === 'object')
		exports["e2b"] = factory(require("e2d"));
	else
		root["e2b"] = factory(root["e2d"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = {
  transform: 0,
  setTransform: 1,
  scale: 2,
  translate: 3,
  rotate: 4,
  skewX: 5,
  skewY: 6,
  restore: 7,
  fillRect: 8,
  strokeRect: 9,
  clearRect: 10,
  rect: 11,
  fillStyle: 12,
  strokeStyle: 13,
  endFillStyle: 14,
  endStrokeStyle: 15,
  lineStyle: 16,
  endLineStyle: 17,
  textStyle: 18,
  endTextStyle: 19,
  shadowStyle: 20,
  endShadowStyle: 21,
  fillText: 22,
  strokeText: 23,
  fillArc: 24,
  strokeArc: 25,
  arc: 26,
  ellipse: 27,
  globalCompositeOperation: 28,
  endGlobalCompositeOperation: 29,
  fill: 30,
  stroke: 31,
  beginClip: 32,
  clip: 33,
  endClip: 34,
  beginPath: 35,
  closePath: 36,
  globalAlpha: 37,
  endGlobalAlpha: 38,
  hitRect: 39,
  hitRegion: 40,
  moveTo: 41,
  lineTo: 42,
  bezierCurveTo: 43,
  quadraticCurveTo: 44,
  imageSmoothingEnabled: 45,
  endImageSmoothingEnabled: 46,
  custom: 47,
  arcTo: 48
};

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = ["ltr", "rtl", "inherit"];

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = [
  "source-over","source-in", "source-out",
  "source-atop", "destination-over", "destination-in",
  "destination-out", "destination-atop", "lighter",
  "copy", "xor", "multiply",
  "screen", "overlay", "darken",
  "lighten", "color-dodge", "color-burn",
  "hard-light", "soft-light", "difference",
  "exclusion", "hue", "saturation",
  "color", "luminosity"
];

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = ['butt', 'round', 'square'];

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = ['bevel', 'round', 'miter'];

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = ["left", "right", "center", "start", "end"];

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = ["top", "hanging", "middle", "alphabetic", "ideographic", "bottom"];

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = (data, index, length) => {
  let value = [];
  for(let i = 0; i < length; i++) {
    value.push(data[i]);
  }
  return value;
};

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = (data, index, length) => {
  let value = '';
  for (let i = 0; i < length; i++) {
    value += String.fromCharCode(data[index + i]);
  }
  return value;
};

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = (data, value) => {
  for (let i = 0; i < value.length; i++) {
    data.push(
      value.charCodeAt(i)
    );
  }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

let consts = __webpack_require__(0);
let { Instruction } = __webpack_require__(9);

//property indexes
let lineCapProps = __webpack_require__(3);
let lineJoinProps = __webpack_require__(4);
let textBaselineProps = __webpack_require__(6);
let textAlignProps = __webpack_require__(5);
let directionProps = __webpack_require__(1);
let globalCompositeOperationProps = __webpack_require__(2);

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

let arcs = {
  [consts.fillArc]: 'fillArc',
  [consts.strokeArc]: 'strokeArc',
  [consts.arc]: 'arc'
};

let emptyInstructions = {
  [consts.endFillStyle]: 'endFillStyle',
  [consts.endLineStyle]: 'endLineStyle',
  [consts.endStrokeStyle]: 'endStrokeStyle',
  [consts.endLineStyle]: 'endLineStyle',
  [consts.endShadowStyle]: 'endShadowStyle',
  [consts.endTextStyle]: 'endTextStyle',
  [consts.restore]: 'restore',
  [consts.endGlobalCompositeOperation]: 'endGlobalCompositeOperation',
  [consts.fill]: 'fill',
  [consts.stroke]: 'stroke',
  [consts.beginClip]: 'beginClip',
  [consts.clip]: 'clip',
  [consts.endClip]: 'endClip',
  [consts.beginPath]: 'beginPath',
  [consts.closePath]: 'closePath',
  [consts.endGlobalAlpha]: 'endGlobalAlpha',
  [consts.endImageSmoothingEnabled]: 'endImageSmoothingEnabled'
};

let points = {
  [consts.moveTo]: 'moveTo',
  [consts.lineTo]: 'lineTo'
};

let getString = __webpack_require__(8);

let getArray = __webpack_require__(7);

let deserialize = (data, custom) => {
  let tree = [];
  for(let i = 0; i < data.length;) {
    let command = data[i];

    if (command === consts.transform) {
      tree.push(
        new Instruction('transform', [
          data[i + 1],
          data[i + 2],
          data[i + 3],
          data[i + 4],
          data[i + 5],
          data[i + 6]
        ])
      );
      i += 7;
      continue;
    }

    if (command === consts.setTransform) {
      tree.push(
        new Instruction('setTransform', [
          data[i + 1],
          data[i + 2],
          data[i + 3],
          data[i + 4],
          data[i + 5],
          data[i + 6]
        ])
      );
      i += 7;
      continue;
    }

    if (command === consts.scale) {
      tree.push(
        new Instruction('scale', { x: data[i + 1], y: data[i + 2] })
      );
      i += 3;
      continue;
    }

    if (command === consts.translate) {
      tree.push(
        new Instruction('translate', { x: data[i + 1], y: data[i + 2] })
      );
      i += 3;
      continue;
    }

    if (command === consts.rotate) {
      tree.push(
        new Instruction('rotate', { cos: data[i + 1], sin: data[i + 2] })
      );
      i += 3;
      continue;
    }

    if (command === consts.skewX) {
      tree.push(
        new Instruction('skewX', { x: data[i + 1] })
      );
      i += 2;
      continue;
    }

    if (command === consts.skewY) {
      tree.push(
        new Instruction('skewY', { y: data[i + 1] })
      );
      i += 2;
      continue;
    }

    if (rects[command]) {
      tree.push(
        new Instruction(rects[command], {
          x: data[i + 1],
          y: data[i + 2],
          width: data[i + 3],
          height: data[i + 4]
        })
      );
      i += 5;
      continue;
    }

    if (command === consts.fillStyle || command === consts.strokeStyle) {
      let length = data[i + 1];

      let value = getString(data, i + 2, length);

      tree.push(
        new Instruction(command === consts.fillStyle ? 'fillStyle' : 'strokeStyle', { value })
      );
      //advance the parser to the next instruction
      i += 2 + length;
      continue;
    }



    if (command === consts.lineStyle) {
      tree.push(
        new Instruction('lineStyle', {
          lineWidth: !isNaN(data[i + 1]) ? data[i + 1] : null,
          lineCap: !isNaN(data[i + 2]) ? lineCapProps[data[i + 2]] || null : null,
          lineJoin: !isNaN(data[i + 3]) ? lineCapProps[data[i + 3]] || null : null,
          miterLimit: !isNaN(data[i + 4]) ? data[i + 4] : null,
          lineDash: !isNaN(data[i + 6]) ? getArray(data, i + 7, data[i + 6]) : null,
          lineDashOffset: !isNaN(data[i + 5]) ? data[i + 5] : null
        })
      );
      i += 7 + (!isNaN(data[i + 6]) ? data[i + 6]: 0);
      continue;
    }

    if (command === consts.textStyle) {
      tree.push(
        new Instruction('textStyle', {
          font: !isNaN(data[i + 4]) ? getString(data, i + 5, data[i + 4]) : null,
          textAlign: !isNaN(data[i + 1]) ? textAlignProps[data[i + 1]] || null : null,
          textBaseline: !isNaN(data[i + 2]) ? textBaselineProps[data[i + 2]] || null : null,
          direction: !isNaN(data[i + 3]) ? directionProps[data[i + 3]] || null : null,
        })
      );
      i += 5 + (!isNaN(data[i + 4]) ? data[i + 4] : 0);
      continue;
    }

    if (command === consts.shadowStyle) {
      tree.push(
        new Instruction('shadowStyle', {
          shadowBlur: !isNaN(data[i + 1]) ? data[i + 1] : null,
          shadowColor: !isNaN(data[i + 4]) ? getString(data, i + 5, data[i + 4]) : null,
          shadowOffsetX : !isNaN(data[i + 2]) ? data[i + 2] : null,
          shadowOffsetY: !isNaN(data[i + 3]) ? data[i + 3] : null,
        })
      );
      i += 5 + (!isNaN(data[i + 4]) ? data[i + 4] : 0);
      continue;
    }

    if (texts[command]) {
      tree.push(
        new Instruction(texts[command], {
          text: !isNaN(data[i + 4]) ? getString(data, i + 5, data[i + 4]) : '',
          x: data[i + 1],
          y: data[i + 2],
          maxWidth: !isNaN(data[i + 3]) ? data[i + 3] : null
        })
      );
      i += 5 + (!isNaN(data[i + 4]) ? data[i + 4] : 0);
      continue;
    }

    if (command === consts.arcTo) {
      tree.push(
        new Instruction('arcTo', {
          x1: data[i + 1],
          y1: data[i + 2],
          x2: data[i + 3],
          y2: data[i + 4],
          r: data[i + 5]
        })
      );
      i += 6;
      continue;
    }

    if (arcs[command]) {
      tree.push(
        new Instruction(arcs[command], {
          x: data[i + 1],
          y: data[i + 2],
          r: data[i + 3],
          startAngle: data[i + 4],
          endAngle: data[i + 5],
          counterclockwise: !!data[i + 6]
        })
      );
      i += 7;
      continue;
    }

    if (command === consts.ellipse) {
      tree.push(
        new Instruction('ellipse', {
          x: data[i + 1],
          y: data[i + 2],
          radiusX: data[i + 3],
          radiusY: data[i + 4],
          rotation: data[i + 5],
          startAngle: data[i + 6],
          endAngle: data[i + 7],
          anticlockwise: !!data[i + 8]
        })
      );
      i += 9;
      continue;
    }

    if (command === consts.globalCompositeOperation) {
      tree.push(
        new Instruction('globalCompositeOperation', {
          value: globalCompositeOperationProps[data[i + 1]]
        })
      );
      i += 2;
      continue;
    }

    if (command === consts.hitRect) {
      tree.push(
        new Instruction('hitRect', {
          id: getString(data, i + 6, data[i + 5]),
          points: [
            [data[i + 1], data[i + 2]],
            [data[i + 3], data[i + 4]],
          ]
        })
      );
      i += 6 + data[i + 5];
      continue;
    }

    if (command === consts.hitRegion) {
      let points = [], len = data[i + 1];
      for(let j = 0; j < len; j++) {
        i += 2;
        points.push(
          [data[i], data[i + 1]]
        );
      }
      i += 2;
      tree.push(
        new Instruction('hitRegion', {
          id: getString(data, i + 1, data[i]),
          points
        })
      );
      i += 1 + data[i];
      continue;
    }

    if (points[command]) {
      tree.push(
        new Instruction(points[command], { x: data[i + 1], y: data[i + 2] })
      );
      i += 3;
      continue;
    }

    if (command === consts.bezierCurveTo) {
      tree.push(
        new Instruction('bezierCurveTo', {
          cp1x: data[i + 1],
          cp1y: data[i + 2],
          cp2x: data[i + 3],
          cp2y: data[i + 4],
          x: data[i + 5],
          y: data[i + 6]
        })
      );
      i += 7;
      continue;
    }

    if (command === consts.quadraticCurveTo) {
      tree.push(
        new Instruction('quadraticCurveTo', {
          cpx: data[i + 1],
          cpy: data[i + 2],
          x: data[i + 3],
          y: data[i + 4]
        })
      );
      i += 5;
      continue;
    }

    if (command === consts.imageSmoothingEnabled) {
      tree.push(
        new Instruction('imageSmoothingEnabled', {
          value: !!data[i + 1]
        })
      );
      i += 2;
      continue;
    }

    if (emptyInstructions[command]) {
      tree.push(
        new Instruction(emptyInstructions[command])
      );
      i += 1;
      continue;
    }

    if (command === consts.custom) {
      if (!custom) {
        throw new Error('Custom command object was falsy, did you forget to provide deserialize methods?');
      }
      let type = getString(data, i + 2, data[i + 1]);
      if (!custom[type]) {
        throw new Error('Custom command serialized but no matching deserialize method provided.');
      }

      i += 2 + data[i + 1];

      //data[i] is count
      //data[i + 1] is first element
      tree.push(
        new Instruction(type,
          custom[type](
            data.slice(i + 1, i + 1 + data[i])
          )
        )
      );
      i += 1 + data[i];
    }
  }

  return tree;
};

module.exports = deserialize;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

let consts = __webpack_require__(0);
let { Instruction, transformPoints, cycleMouseData } = __webpack_require__(9);

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
let lineCapProps = __webpack_require__(3);
let lineJoinProps = __webpack_require__(4);
let textBaselineProps = __webpack_require__(6);
let textAlignProps = __webpack_require__(5);
let directionProps = __webpack_require__(1);
let globalCompositeOperationProps = __webpack_require__(2);

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

let getString = __webpack_require__(8);

let getArray = __webpack_require__(7);

let render = (data, ctx) => {

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

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

let concat = [].concat;
let { Instruction } = __webpack_require__(9);
let consts = __webpack_require__(0);

//property indexes
let lineCapProps = __webpack_require__(3);
let lineJoinProps = __webpack_require__(4);
let textBaselineProps = __webpack_require__(6);
let textAlignProps = __webpack_require__(5);
let directionProps = __webpack_require__(1);
let globalCompositeOperationProps = __webpack_require__(2);

let emptyInstructions = {
  'endLineStyle': true,
  'endTextStyle': true,
  'endStrokeStyle': true,
  'endFillStyle': true,
  'endShadowStyle': true,
  'restore': true,
  'endGlobalCompositeOperation': true,
  'fill': true,
  'stroke': true,
  'beginClip': true,
  'clip': true,
  'endClip': true,
  'beginPath': true,
  'closePath': true,
  'endGlobalAlpha': true,
  'endImageSmoothingEnabled': true
};

let arcs = {
  'fillArc': true,
  'strokeArc': true,
  'arc': true
};

let points = {
  'moveTo': true,
  'lineTo': true
};


let pushString = __webpack_require__(10);

let serialize = (...args) => {
  let custom = {};

  //flatten the tree
  for (let i = 0; i < args.length; i++) {
    while (args[i] && args[i].constructor === Array) {
      args = concat.apply([], args);
    }
  }

  //detect custom serializer
  if (args[args.length - 1].constructor !== Instruction) {
    custom = args[args.length - 1];
    args.splice(-1, 1);
  }

  let result = [];

  for (let i = 0; i < args.length; i++) {
    let { type, props } = args[i];

    if (type === 'transform') {
      result.push(consts.transform, props[0], props[1], props[2], props[3], props[4], props[5]);
      continue;
    }

    if (type === 'setTransform') {
      result.push(consts.setTransform, props[0], props[1], props[2], props[3], props[4], props[5]);
      continue;
    }

    if (type === 'scale') {
      result.push(consts.scale, props.x, props.y);
      continue;
    }

    if (type === 'translate') {
      result.push(consts.translate, props.x, props.y);
      continue;
    }

    if (type === 'rotate') {
      result.push(consts.rotate, props.cos, props.sin);
      continue;
    }

    if (type === 'skewX') {
      result.push(consts.skewX, props.x);
      continue;
    }

    if (type === 'skewY') {
      result.push(consts.skewY, props.y);
      continue;
    }

    if (type === 'fillRect' || type === 'strokeRect' || type === 'clearRect' || type === 'rect') {
      result.push(consts[type], props.x, props.y, props.width, props.height);
      continue;
    }

    if (type === 'fillStyle' || type === 'strokeStyle') {
      result.push(
        consts[type],
        props.value.length
      );

      pushString(result, props.value);
      continue;
    }


    if (type === 'lineStyle') {
      result.push(
        consts.lineStyle,
        props.lineWidth !== null ? props.lineWidth : NaN,
        props.lineCap ? lineCapProps.indexOf(props.lineCap) : NaN,
        props.lineJoin ? lineJoinProps.indexOf(props.lineJoin) : NaN,
        props.miterLimit !== null ? props.miterLimit : NaN,
        props.lineDashOffset !== null ? props.lineDashOffset : NaN,
        props.lineDash !== null ? props.lineDash.length : NaN
      );

      if (props.lineDash !== null) {
        for (let j = 0; j < props.lineDash.length; j++) {
          result.push(props.lineDash);
        }
      }
      continue;
    }

    if (type === 'textStyle') {
      result.push(
        consts.textStyle,
        props.textAlign ? textAlignProps.indexOf(props.textAlign) : NaN,
        props.textBaseline ? textBaselineProps.indexOf(props.textBaseline) : NaN,
        props.direction ? directionProps.indexOf(props.direction) : NaN,
        props.font ? props.font.length : NaN
      );

      if (props.font !== null) {
        pushString(result, props.font);
      }
      continue;
    }

    if (type === 'shadowStyle') {
      result.push(
        consts.shadowStyle,
        props.shadowBlur !== null ? props.shadowBlur : NaN,
        props.shadowOffsetX !== null ? props.shadowOffsetX : NaN,
        props.shadowOffsetY !== null ? props.shadowOffsetY : NaN,
        props.shadowColor !== null ? props.shadowColor.length : NaN
      );

      if (props.shadowColor !== null) {
        pushString(result, props.shadowColor);
      }
      continue;
    }

    if (type === 'fillText' || type === 'strokeText') {
      result.push(
        consts[type],
        props.x,
        props.y,
        props.maxWidth !== null ? props.maxWidth : NaN,
        props.text.length
      );

      pushString(result, props.text);
      continue;
    }

    if (type === 'arcTo') {
      result.push(
        consts.arcTo,
        props.x1,
        props.y1,
        props.x2,
        props.y2,
        props.r
      );
    }

    if (arcs[type]) {
      result.push(
        consts[type],
        props.x,
        props.y,
        props.r,
        props.startAngle,
        props.endAngle,
        props.counterclockwise ? 1 : 0
      );
      continue;
    }

    if (type === 'ellipse') {
      result.push(
        consts.ellipse,
        props.x,
        props.y,
        props.radiusX,
        props.radiusY,
        props.rotation,
        props.startAngle,
        props.endAngle,
        props.anticlockwise ? 1 : 0
      );
      continue;
    }

    if (type === 'globalCompositeOperation') {
      result.push(
        consts.globalCombpositeOperation,
        globalCompositeOperationProps.indexOf(props.value)
      );
      continue;
    }

    if (type === 'globalAlpha') {
      result.push(
        consts.globalAlpha,
        props.value
      );
      continue;
    }

    if (points[type]) {
      result.push(
        consts[type],
        props.x,
        props.y
      );
      continue;
    }

    if (type === 'hitRect') {
      result.push(
        consts.hitRect,
        //x
        props.points[0][0],
        //y
        props.points[0][1],
        //width
        props.points[1][0],
        //height
        props.points[1][1],
        props.id.length
      );
      pushString(result, props.id);

      continue;
    }

    if (type === 'hitRegion') {
      result.push(
        consts.hitRegion,
        props.points.length
      );
      for(let j = 0; j < props.points.length; j++) {
        result.push(props.points[j][0], props.points[j][1]);
      }
      result.push(props.id.length);
      pushString(result, props.id);

      continue;
    }

    if (type === 'bezierCurveTo') {
      result.push(
        consts.bezierCurveTo,
        props.cp1x,
        props.cp1y,
        props.cp2x,
        props.cp2y,
        props.x,
        props.y
      );

      continue;
    }

    if (type === 'quadraticCurveTo') {
      result.push(
        consts.quadraticCurveTo,
        props.cpx,
        props.cpy,
        props.x,
        props.y
      );

      continue;
    }

    if (type === 'imageSmoothingEnabled') {
      result.push(
        consts.imageSmoothingEnabled,
        props.value ? 1 : 0
      );
      continue;
    }

    if (emptyInstructions.hasOwnProperty(type)) {
      result.push(consts[type]);
      continue;
    }

    if (custom.hasOwnProperty(type)) {
      result.push(
        consts.custom,
        type.length
      );
      pushString(result, type);

      let data = custom[type](props);

      result.push(data.length);
      for(let j = 0; j < data.length; j++) {
        result.push(data[j]);
      }
      continue;
    }
  }

  return new Float64Array(result);
};

module.exports = serialize;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  'consts': __webpack_require__(0),
  'deserialize': __webpack_require__(11),
  'directionProps': __webpack_require__(1),
  'getArray': __webpack_require__(7),
  'getString': __webpack_require__(8),
  'globalCompositeOperationProps': __webpack_require__(2),
  'lineCapProps': __webpack_require__(3),
  'lineJoinProps': __webpack_require__(4),
  'pushString': __webpack_require__(10),
  'render': __webpack_require__(12),
  'serialize': __webpack_require__(13),
  'textAlignProps': __webpack_require__(5),
  'textBaselineProps': __webpack_require__(6)
};

/***/ }
/******/ ]);
});