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
      loaders: ['babel?optional=es7.decorators'],
      exclude: [config.nodeModulesPath]
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=99999999999'
    }]
  }
};

module.exports = webpackConfig;
