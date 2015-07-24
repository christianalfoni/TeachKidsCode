var express = require('express');
var path = require('path');
var app = express();
var config = require('./../config.js');
var configureProduction = require('./configureProduction.js');
var configureDevelopment = require('./configureDevelopment.js');
var bodyParser = require('body-parser');
var db = require('./db.js');
var git = require('./git.js');

app.use(express.static(config.publicPath));
app.use(bodyParser.json());

app.post('/files', function (req, res) {
  db.updateFile(req.body.file, function (err, result) {
    if (err) {
      res.status(500);
      res.send(err)
    } else {
      res.type('json');
      res.send(result);
    }
  });
});

app.get('/files', function (req, res) {
  db.getFiles(function (err, result) {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.type('json');
      res.send(result);
    }
  });
});

app.post('/files/:id/publish', function (req, res) {
  git.publish();
});

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
