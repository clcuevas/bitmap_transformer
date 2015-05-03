'use strict';

function read(data) {
  var obj = {};

  obj.type = data.toString('utf-8', 0, 2);
  obj.size = data.readInt32LE(2);
  obj.pixelStart = data.readInt32LE(10);
  obj.width = data.readInt32LE(18);
  obj.heigth = data.readInt32LE(22);
  obj.color = data.readInt16LE(28);
  obj.palette = data.readInt32LE(46);
  // console.log(obj);
  return obj;
}

exports.read = read;