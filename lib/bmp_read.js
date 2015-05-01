'use strict';

var fs = require('fs');

function readBMP(filename) {
  fs.readFile(filename, function(err, data) {
    if(err) {
      throw err;
    }
    console.log(data);
    convert(data);
  });//end readFile
}

function convert(data) {
  console.log(data);
  var stringBit = data.toString('utf-8', 54, 255);

  console.log('this is stringBit ' + stringBit);
  return stringBit;
}

exports.readBMP = readBMP;
//exports.convert = convert;
