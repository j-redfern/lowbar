const _ = {};

_.identity = function (x) {
  return x;
};

_.values = function (list) {
    
    let array = [];

    if (typeof list === 'object') {
        for (var keys in list) {
            array.push(list[keys]);
          }
          return array;
    }
    if (Array.isArray(list)) {
        return list;
    }
    else {
      return [];
    }
};

_.first = function (array, n) {
    if (!Array.isArray(array) || typeof n !== "number" || n === 0) {
      return [];
    }
    return array.slice(0, n);
};

_.last = function (array, n) {
    if (!Array.isArray(array) || typeof n !== "number" || n === 0) {
      return [];
    }
    return array.slice(-n);
};

_.each = function (list, iteratee) {
    if (Array.isArray(list)) {
      for (var i = 0; i < list.length; i++) {
        iteratee(list[i], i, list);
      }
    } else {
      for (var key in list) {
        iteratee(list[key], key, list);
      }
    }
};

_.indexOf = function (array, n) {
    if (!Array.isArray(array) || typeof n !== 'number') return []; 
    if (n === 0) return -1;

    for (var i = 0; i < array.length; i++) {
      if (array[i] === n) {
        return i;
      }
    }
};

_.filter = function (list, predicate) {
    
    var result = [];

    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            if (predicate(list[i])) {
            result.push(list[i])
        }
    }
    return result;
    }

    if (typeof list === 'object') {
        for (var key in list) {
            if (predicate(list[key])){
                result.push(list[key])
            }
        }
        return result;
    }
    else {
        return "invalid list input"
    }
}

_.reject = function (list, predicate) {
    
      var result = [];
    
      if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
          if (!predicate(list[i])) {
            result.push(list[i])
          }
        }
        return result;
      }
      if (typeof list === 'object') {
        for (var key in list) {
            if (!predicate(list[key])){
                result.push(list[key])
            }
        }
        return result;
    }
    else {
        return "invalid list input"
    }
};

_.uniq = function (array) {
    if (!Array.isArray(array)) return [];
  
    let newList = [];
  
    for (var i = 0; i < array.length; i++) {
      if (newList.indexOf(array[i]) === -1) {
        newList.push(array[i])
      }
    }
    return newList;
};

_.map = function (list, iteratee) {

    let newArr = [];
  
    if (Array.isArray(list)) {
      for (var i = 0; i < list.length; i++) {
        newArr.push(iteratee(list[i], i, list))
      }
      return newArr;
    }
  
    if (typeof list === 'object') {
      for (var key in list) {
        newArr.push(iteratee(list[key], key, list))
      }
      return newArr;
    } 
    else {
      return []
    }
};

_.contains = function (list,value,fromIndex) {
    if(Array.isArray(list) || typeof list === 'string') {
        for (var i = fromIndex ; i < list.length ; i++) {
            if(value === list[i]) {
                return 'true'
            } 
        } return 'false';    
    }
    if (typeof list === 'object'){
        for (var key in list) {
            if(value === list[key]) {
                return 'true'
            } 
        }  
        return 'false'
    }
    else {
        return 'false';
    }            
};

_.pluck = function (list, propertyName) {
    
    let newArr = [];

    if (Array.isArray(list)){
        for(var i = 0; i < list.length ; i++){
            if (list[i][propertyName] !== undefined) {
                newArr.push(list[i][propertyName])
            } else {
                return "undefined propertyName"
            }
        }
    }else if(typeof list === 'object'){
        if(list[propertyName] !== undefined){
            newArr.push(list[propertyName])
        } else {
            return "undefined propertyName"
        }
    }
    else {
        return "invalid input";
    }  
    return newArr
}

module.exports = _;


