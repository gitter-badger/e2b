var path = require('path'),
    pkg = require('./package.json'),
    webpack = require('webpack'),
    Babili = require('babili-webpack-plugin'),
    LibrarySourcePlugin = require('library-src-plugin');

let buildConfig = (useBabel, minify, name) => ({
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
  plugins: (minify ?  [
    new Babili()
  ] : []).concat([
    new LibrarySourcePlugin({
      entry: pkg.name,
      folder: './src/'
    })
  ]),
  externals: [
    'e2d'
  ],
  performance: false
});
module.exports = [
  buildConfig(false, false, 'e2b'),
  buildConfig(true, false, 'e2b.compat'),
  buildConfig(false, true, 'e2b.min'),
  buildConfig(true, true, 'e2b.compat.min')
];
