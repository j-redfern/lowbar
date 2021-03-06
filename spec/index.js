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

describe('#reject', function () {
    it('is a function', function() {
    expect(_.reject).to.be.a('function');
    });
    
    it('returns "invalid list input" when list is not an object or array', function() {
    expect(_.reject(123)).to.be.equal("invalid list input");
    expect(_.reject("hello")).to.be.equal("invalid list input");
    });

    it('returns array of values that does not pass the predicate ', function() {
    let list = [1, 2, 3, 4, 5, 6];
    let predicate = function(num) { return num % 2 === 0 }    
    expect(_.reject(list,predicate)).to.eql([1,3,5]);
    });

    it('filters through an object and returns an array of values that fails the predicate ', function() {
    let list = {a:1 , b:2, c:3};
    let predicate = function (list) { return list % 2 === 0 }    
    expect(_.reject(list, predicate)).to.eql([1,3]);
    });
  
}); 

describe('#uniq', function () {
    it('is a function', function() {
    expect(_.uniq).to.be.a('function');
    });
  
    it('returns a new array', function() {
      let arr = [1,2,1,3,4];
      expect(_.uniq(arr)).to.not.equal(arr);
    });
  
    it('returns [] when input is not an array', function() {
    expect(_.uniq('abc')).to.be.eql([]);
    expect(_.uniq(123)).to.be.eql([]);
    expect(_.uniq({})).to.be.eql([]);
    });
  
    it('returns an array of duplicate free values', function() {
    expect(_.uniq([1,2,1,4,3,2])).to.be.eql([1,2,4,3]);
    });
});

describe('#map', function () {
    it('is a function', function() {
    expect(_.map).to.be.a('function');
    });
    it('returns [] if input is not an array or object', function() {
      expect(_.map('abc')).to.be.eql([]);
      expect(_.map(123)).to.be.eql([]);
    });

    it('produces a new array of values by mapping each element in the array through an iteratee', function() {
      expect(_.map([1,2,3], function (num,index,list){ return num * 3})).to.be.eql([3,6,9]);
      expect(_.map([1,2,3,4], function (num){ return num + 1})).to.be.eql([2,3,4,5]);
    });

    it('produces a new array of values by mapping each element in the object through an iteratee', function() {
      expect(_.map({one:1,two:2,three:3},function (num){ return num * 3})).to.be.eql([3,6,9]);
    });
});

describe('#contains', function () {
    it('is a function', function() {
    expect(_.contains).to.be.a('function');
    });
  
    it('returns true when value is present in the list', function() {
    expect(_.contains({1:"hello", 2: "bye", 3: "world"}, "bye",1)).to.equal('true');
    expect(_.contains("hello", "e",1)).to.equal('true');
    expect(_.contains([1,2,3],3,1)).to.equal('true');
    });
  
    it('returns false when value is not present in the list or typeOf list is a number', function() {
    expect(_.contains({1:"hello", 2: "bye", 3: "world"}, "hi",2)).to.equal('false');
    expect(_.contains("hello", "g",2)).to.equal('false');
    expect(_.contains([1,2,3],5,2)).to.equal('false');
    expect(_.contains((1,2,3),2,2)).to.equal('false');
    });
  
    it('starts search from given index when list is an array and returns true if value is in the searched array', function() {
    expect(_.contains([1,2,3,4],3,1)).to.eql('true');
    expect(_.contains([1,2,3,4],1,0)).to.eql('true');
    expect(_.contains([1,2,3,4],4,2)).to.eql('true');
    });
  
    it('starts search from given index when list is an array and returns false if value is in the searched array', function() {
    expect(_.contains([1,2,3,4],3,4)).to.eql('false');
    expect(_.contains([1,2,3,4],2,3)).to.eql('false');
    expect(_.contains([1,2,3,4],1,4)).to.eql('false');
    });
});

describe('#pluck', function () {
    it('is a function', function() {
    expect(_.pluck).to.be.a('function');
    });

    it('returns "invalid input" when list is not an object or array ', function() {
    expect(_.pluck((123, 2))).to.be.equal('invalid input');
    expect(_.pluck(("hello", "bye"),"bye")).to.be.equal('invalid input');
    });

    it('returns "undefined propertyName" when propertyName does not exist in list', function() {
    expect(_.pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], "gender")).to.be.equal('undefined propertyName');
    expect(_.pluck({name: 'moe', age: 40},"city")).to.be.equal('undefined propertyName');
        });

    it('returns values in propertyName values as a new array', function() {
    expect(_.pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], "name")).to.be.eql(["moe", "larry","curly"]);
    expect(_.pluck({name: 'curly', age: 60}, "name")).to.be.eql(["curly"]);
    });

});