var webpack = require('webpack');
var config = require('./config');

var webpackConfig = {
  entry: {
    app: ['webpack-dev-server/client?http://localhost:3030', config.appEntryPath],
  },
  context: config.appPath,
  devtool: 'eval',
  output: {
    filename: config.bundleFileName,
    path: config.buildPath,
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?optional=es7.decorators'],
      exclude: [config.nodeModulesPath]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=99999999999'
    }]
  }
};

module.exports = webpackConfig;
