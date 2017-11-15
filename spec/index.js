const path = require('path');
const expect = require('chai').expect;
const sinon = require('sinon');

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

describe('#last', function () {
    it('is a function', function() {
    expect(_.last).to.be.a('function');
    });

    it('returns [] when array is not an array or when n is not a number', function() {
    expect(_.last({},1)).to.be.eql([]);
    expect(_.last('abc',2)).to.be.eql([]);
    expect(_.last(123,1)).to.be.eql([]);
    expect(_.last([1,2,3],'a')).to.be.eql([]);
    expect(_.last([1,2,3],[2])).to.be.eql([]);
    expect(_.last([1,2,3],{})).to.be.eql([]);
    });
      
    it('returns [] when n is 0 ', function() {
    expect(_.last([1,2,3],0)).to.be.eql([]);
    });
    
    it('returns last element in the array', function() {
    expect(_.last([1,2,3],1)).to.be.eql([3]);
    expect(_.last(["hi","world","bye"],1)).to.be.eql(["bye"]);
    });
  
    it('returns last n elements in the array', function() {
      expect(_.last([1,2,3],1)).to.be.eql([3]);
      expect(_.last([1,2,3],2)).to.be.eql([2,3]);
    });
});

describe('#each', function () {
    it('is a function', function() {
    expect(_.each).to.be.a('function');
    });
  
    it('checks the iteratee is called as many times as items in the passed array', function () {
      const spy = sinon.spy();
      _.each([1, 2, 3], spy);
      expect(spy.callCount).to.equal(3);
    });
  
    it('calls the iteratee on the array list and returns list[i],i,list ', function () {
  
      const spy = sinon.spy();
      _.each([1, 2, 3], spy);
      expect(spy.firstCall.calledWithExactly(1, 0, [1, 2, 3])).to.equal(true);
      expect(spy.secondCall.calledWithExactly(2, 1, [1, 2, 3])).to.equal(true);
      expect(spy.thirdCall.calledWithExactly(3, 2, [1, 2, 3])).to.equal(true);
    });
  
    it('calls the iteratee on the object list and returns list[key],key,list', function () {
  
      const spy = sinon.spy();
      _.each({ one: 1, two: 2, three: 3 }, spy);  
      expect(spy.firstCall.calledWithExactly(1, 'one', { one: 1, two: 2, three: 3 })).to.equal(true);
      expect(spy.secondCall.calledWithExactly(2, 'two', { one: 1, two: 2, three: 3 })).to.equal(true);
      expect(spy.thirdCall.calledWithExactly(3, 'three', { one: 1, two: 2, three: 3 })).to.equal(true);
    });
});

describe('#indexOf', function () {
    it('is a function', function() {
    expect(_.indexOf).to.be.a('function');
    });
  
    it('returns [] when array is not an array and n is not a number', function() {
    expect(_.indexOf(123,1)).to.be.eql([]);
    expect(_.indexOf({},2)).to.be.eql([]);
    expect(_.indexOf('hello',3)).to.be.eql([]);
    expect(_.indexOf([1,2,3],'a')).to.be.eql([]);
    expect(_.indexOf([1,2,3],[1])).to.be.eql([]);
    expect(_.indexOf([1,2,3],{})).to.be.eql([]);
    });
  
    it('returns -1 when n is 0', function() {
    expect(_.indexOf([1,2,3],0)).to.be.equal(-1);
    });

    it('returns the index position of n in the array', function() {
    expect(_.indexOf([1,2,3],1)).to.be.equal(0);
    expect(_.indexOf([1,2,3],2)).to.be.equal(1);
    expect(_.indexOf([1,2,3],3)).to.be.equal(2);
    });
}); 

describe('#filter', function () {
    it('is a function', function() {
    expect(_.filter).to.be.a('function');
    });

    it('returns "invalid list input" when list is not an object or array', function() {
    expect(_.filter(123)).to.be.equal("invalid list input");
    expect(_.filter("hello")).to.be.equal("invalid list input");
    });
  
    it('filters through an array and returns an array of values that pass the predicate ', function() {
    let list = [1,2,3,4,5,6];
    let predicate = function (list) { return list % 2 === 0 }    
    expect(_.filter(list, predicate)).to.eql([2, 4, 6]);
    });
  
    it('filters through an object and returns an array of values that pass the predicate ', function() {
    let list = {a:1 , b:2, c:3};
    let predicate = function (list) { return list % 2 === 0 }    
    expect(_.filter(list, predicate)).to.eql([2]);
    });
  });

