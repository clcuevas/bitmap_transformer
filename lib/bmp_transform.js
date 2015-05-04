'use strict';

var fs = require('fs');
var create = require('./bmp_create.js').createFile;
var newBMP;

function transform(data) {
  for(var i = 54; i < 1078; i++) {
    data[i] = Math.floor(Math.random() * 256 - 1);
  }//loop through pixel array
  newBMP = new Buffer(create(data));

  fs.writeFile('./images/new-file.bmp', newBMP, function(err, data) {
    if(err) {
      throw err;
    }
    console.log('I am working');
  });//end write to file
}

exports.transform = transform;