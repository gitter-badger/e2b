var path = require('path'),
    pkg = require('./package.json'),
    webpack = require('webpack'),
    Babili = require('babili-webpack-plugin');

let buildConfig = (useBabel, useUglify, name) => ({
  context: __dirname,
  entry: {
    [name]: './index.js'
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    library: 'e2b',
    libraryTarget: 'umd'
  },
  module: {
    rules: useBabel ? [
      {
        test: /\.js$/i,
        use: ['babel-loader']
      }
    ] : []
  },
  plugins: useUglify && useBabel ? [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ] :
  useUglify && !useBabel ? [
    new Babili()
  ] : [],
  externals: [
    'e2d'
  ]
});
module.exports = [
  buildConfig(false, false, 'e2b'),
  buildConfig(true, false, 'e2b.compat'),
  buildConfig(false, true, 'e2b.min'),
  buildConfig(true, true, 'e2b.compat.min')
];
