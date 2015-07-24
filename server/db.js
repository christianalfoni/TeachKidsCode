var MongoClient = require('mongodb').MongoClient;
var db = null;

 MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, connectedDb) {
   if(err) throw err;
   db = connectedDb;
   console.log('Connected to DB');
});

module.exports = {
  updateFile: function (file, cb) {
    var collection = db.collection('files');
    var data = {
      name: file.name + '.md',
      content: file.content
    };

    console.log(data);

    collection.findAndModify({name: file.name + '.md'}, {}, data, {upsert: true}, function(err, docs) {
      if (err) {
        cb(err);
      } else {
        cb(null, {
          id: docs.lastErrorObject.upserted || docs.value._id
        });
      }
    });
  },
  getFiles: function (cb) {
    var collection = db.collection('files');
    collection.find().toArray(function (err, results) {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  }
};
