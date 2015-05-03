'use strict';

var fs = require('fs');

function transform(data) {
  for(var i = 54; i < 1078; i++) {
    data[i] = Math.floor(Math.random() * 256 - 1);
  }//loop through pixel array
  fs.writeFile('./images/random.bmp', data, function(err, data) {
    if(err) {
      throw err;
    }
    console.log('I am working');
  });//end write to file
}

exports.transform = transform;