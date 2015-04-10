var webpack = require('webpack');
var config = require('./config');

var webpackConfig = {
  entry: {
    app: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:3030', config.appEntryPath],
    vendors: config.vendors
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
      loaders: ['babel'],
      exclude: [config.nodeModulesPath]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=99999999999'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = webpackConfig;
