'use strict';

const fs = require('fs');

module.exports = exports = {};
exports.files = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];

exports.grabFiles = function(files, iterator, cb) {
  var resultsArray = [];
  var endCount = 0;
  function finished(err, data) {
    if (err) throw err;
    endCount += 1;
    if(endCount === files.length) {
      cb(data);
    }
  }
  for (let i = 0; i < files.length; i++) {
    iterator(files[i], resultsArray, finished);
  }
}

exports.logThem = function(data) {
  console.log(data);
}

exports.readFiles = function(file, resultsArray, cb) {
  fs.readFile(file, function(err, data) {
    if (err) return cb(err);
    let filename = file.slice(file.lastIndexOf('/') + 1 , file.length + 1);
    let fileorder = exports.files.indexOf(file);
    resultsArray[fileorder] = `These are the first eight bytes of ${filename}: ${data.toString('hex', 0, 8)}`;
    cb(null, resultsArray);
  });
}
