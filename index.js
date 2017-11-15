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

module.exports = _;