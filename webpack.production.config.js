var config = require('./config.js');
var webpack = require('webpack');

var webpackConfig = {
  entry: config.appEntryPath,
  output: {
    filename: config.bundleFileName,
    path: config.buildPath
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: [config.nodeModulesPath]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')]
};

module.exports = webpackConfig;
