'use strict';

function createFile(data) {
  var tempArray = [];

  for(var i = 0; i < data.length; i++) {
    tempArray.push(data[i]);
  }
  return tempArray;
}

exports.createFile = createFile;