'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var bitmap = require('../lib/bmpObject.js').read;
var file = fs.readFileSync('./images/bitmap1.bmp');

describe('Test bitmap object information', function() {
	it('should be a type of BM', function() {
		//console.log(bitmap(file));
		expect(bitmap(file).type).to.equal('BM');
	});//end type test

	it('should have a size of 11078', function() {
		expect(bitmap(file).size).to.equal(11078);
	});//end size test

	it('should have a width of 100', function() {
		expect(bitmap(file).width).to.equal(100);
	});//end bitmap width test

	it('should have a heigth of 100', function() {
		expect(bitmap(file).heigth).to.equal(100);
	});//end bitmap heigth test
});//end bitmap object describe test
