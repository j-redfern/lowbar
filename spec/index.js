const path = require('path');
const expect = require('chai').expect;

const _ = require(path.join(__dirname, '..', './index'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
}); 

describe('#identity', function () {
    it('is a function', function() {
      expect(_.identity).to.be.a('function');
    });

    it('returns argument as the value', function() {
      expect(_.identity('a')).to.be.eql('a');
      expect(_.identity({'a':1})).to.be.eql({'a':1});
      expect(_.identity(1)).to.be.eql(1);
      expect(_.identity([1,2,4])).to.be.eql([1,2,4]);
    });
});

describe('#values', function () {
    it('is a function', function() {
    expect(_.values).to.be.a('function');
    });
    
    it('returns [] if input is not an object or an array', function() {
    expect(_.values(123)).to.be.eql([]);
    expect(_.values('abc')).to.be.eql([]);
    });
    
    it('returns values in the objects in an array', function() {
    expect(_.values({'a':1,'b':2,'c':3})).to.be.eql([1,2,3]);
    });

    it('returns values in the array in an array', function() {
    expect(_.values([1,2,3])).to.be.eql([1,2,3]);
    });
});

describe('#first', function () {
    it('is a function', function() {
    expect(_.first).to.be.a('function');
    });
  
    it('returns [] when array is not an array or when n is not a number', function() {
      expect(_.first({},1)).to.be.eql([]);
      expect(_.first('abc',2)).to.be.eql([]);
      expect(_.first(123,1)).to.be.eql([]);
      expect(_.first([1,2,3],'a')).to.be.eql([]);
      expect(_.first([1,2,3],[2])).to.be.eql([]);
      expect(_.first([1,2,3],{})).to.be.eql([]);
      });
    
    it('returns [] when n is 0 ', function() {
    expect(_.first([1,2,3],0)).to.be.eql([]);
    });

    it('returns first element in the array when n is 1', function() {
      expect(_.first([1,2,3],1)).to.be.eql([1]);
      expect(_.first(["hi","world","bye"],1)).to.be.eql(["hi"]);
    });  
  
    it('returns first n elements in the array', function() {
      expect(_.first([1,2,3],1)).to.be.eql([1]);
      expect(_.first([1,2,3],2)).to.be.eql([1,2]);
      expect(_.first(["hi","world","bye"],2)).to.be.eql(["hi","world"])
    });
});



