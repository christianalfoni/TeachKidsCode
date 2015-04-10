var config = require('./../config.js');
var httpProxy = require('http-proxy');
var configureWorkflow = require('./configureWorkflow.js');

module.exports = function (app) {

  // === WORKFLOW ===
  configureWorkflow();

  var proxy = httpProxy.createProxyServer({
    changeOrigin: true
  });

  app.all('*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:3030/'
    });
  });

  proxy.on('error', function (e) {
    console.log('You can not connect to proxy yet, please hold on...');
  });
  // === WORKFLOW END ===

};
