var merge = require('./utils/merge.js');
var path = require('path');
var isProduction = process.env.NODE_ENV === 'production';

var common = {
  isProduction: isProduction,
  publicPath: path.resolve(__dirname, 'public'),
  appPath: path.resolve(__dirname, 'app'),
  appEntryPath: path.resolve(__dirname, 'app', 'main.js'),
  nodeModulesPath: path.resolve(__dirname, 'node_modules'),
  vendors: ['react', 'react-bootstrap', 'baobab'],
  buildPath: path.resolve(__dirname, 'public', 'build'),
  bundleFileName: 'app.js'
};

var production = {
  port: process.env.PORT || 8080
};

var development = {
  port: 3000
};

module.exports = merge(isProduction ? production : development, common);
