var express = require('express');
var path = require('path');
var app = express();
var config = require('./../config.js');
var configureProduction = require('./configureProduction.js');
var configureDevelopment = require('./configureDevelopment.js');

app.use(express.static(config.publicPath));

// Require inline to avoid loading dependencies not needed in
// production
if (config.isProduction) {
  configureProduction(app);
} else {
  configureDevelopment(app);
}

app.listen(config.port, function () {
  console.log('Listening to app on port ' + config.port);
});
