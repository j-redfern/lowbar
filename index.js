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

module.exports = _;