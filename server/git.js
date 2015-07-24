var path = require('path');
var repo = path.resolve(__dirname, '..', 'dummyfilerepo');
var exec = require('child_process').exec;
var fs = require('fs');

var Command = function () {
  var cmd = [];
  return {
    add: function (command) {
      cmd.push(command);
    },
    get: function () {
      return cmd.join(' && ');
    }
  };
};

module.exports = {
  publish: function (file) {

    var addBranch = Command();
    addBranch.add('cd ' + repo);
    addBranch.add('git checkout -b test');

    exec(addBranch.get(), function(error, stdout, stderr) {

      fs.writeFileSync(path.resolve(repo, 'test.md'), '# Just a test');

      var addCommitPush = Command();
      addCommitPush.add('git add .');
      addCommitPush.add('git commit -m "Added a file"');
      addCommitPush.add('git push');
      exec(addCommitPush.get(), function () {
        console.log(arguments);
      });

    });
  }
};
