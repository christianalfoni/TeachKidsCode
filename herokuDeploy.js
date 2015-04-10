if (process.env.NODE_ENV === 'production') {
  var child_process = require('child_process');
  return child_process.exec("webpack -p --config webpack.production.config.js --colors --progress --display-error-details", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}
