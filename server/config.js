var merge = require('./merge.js');
var path = require('path');
var isProduction = process.env.NODE_ENV === 'production';

var common = {
  publicPath: path.resolve(__dirname, '..', 'public'),
};

var production = {
  port: 8080
};

var development = {
  port: 3000,
  buildPath: path.resolve(__dirname, '..', 'public', 'build')
};

module.exports = merge(isProduction ? production : development, common);
