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


module.exports = _;