var config = require('./../config.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');

module.exports = function () {

  var compiler = webpack(webpackConfig, function () {
    console.log('Project is ready!');
  });

  var bundler = new WebpackDevServer(compiler, {
    contentBase: config.buildPath,
    hot: true,
    quiet: false,
    noInfo: true,
    publicPath: '/build/',
    stats: {
      colors: true
    },
    historyApiFallback: true
  });

  bundler.listen(3030, "localhost", function () {
    console.log('Bundling project, please wait...');
  });

};
