var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public');
var appPath = path.resolve(__dirname, 'app');

var config = {
  entry: {
    app: ['webpack-dev-server/client?http://localhost:3030', path.resolve(appPath, 'main.js')],
    vendors: ['react', 'react-bootstrap', 'baobab']
  },
  context: appPath,
  devtool: 'eval',
  output: {
    filename: 'app.js',
    path: buildPath,
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: [node_modules_dir]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {        
      test: /\.less$/,
      loader: 'style!css!less'  
     }]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')]
};

module.exports = config;
