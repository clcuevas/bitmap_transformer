'use strict';

var fs = require('fs');
//read bitmap object
var read = require('./bmpObject.js').read;
//transform/ change bitmap colors and write to random.bmp file
var transform = require('./bmp_transform.js').transform;


module.exports = function(file) {
  fs.readFile(file, function(err, data) {
    if(err) {
      throw err;
    }
  //read bitmap as an object for information
  read(data);
  //change colors of bitmap file and write to new bmp file
  transform(data);
  return data;
  });
};
