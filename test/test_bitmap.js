'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var bitmap = require('../lib/bmpObject.js').read;
//var file = fs.readFile('./images/bitmap1.bmp');
var file;

describe('Test bitmap object information', function() {

	before(function(done) {
		fs.readFile('./images/bitmap1.bmp', function(err, data) {
			if(err) {
				throw err;
			}
			file = bitmap(data);
			/*When you create a before block you need a parameter of 'done' so that when your block has finished reading what you're running it will force the script to end(similar to a return statement)*/
			done();
		});//end readFile
	});//end before call

	it('should be a type of BM', function() {
		expect(file.type).to.equal('BM');
	});//end type test

	it('should have a size of 11078', function() {
		expect(file.size).to.equal(11078);
	});//end size test

	it('should have a width of 100', function() {
		expect(file.width).to.equal(100);
	});//end bitmap width test

	it('should have a heigth of 100', function() {
		expect(file.heigth).to.equal(100);
	});//end bitmap heigth test
});//end bitmap object describe test
