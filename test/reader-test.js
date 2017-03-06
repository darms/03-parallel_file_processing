'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const fileReader = require('../lib/reader.js');

describe('File reader module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return the contents of the file', function(done) {
      fileReader(`${__dirname}/../data/one.txt`, function(err,data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('some data in a file');
        done();
      });
    });
  });

});
