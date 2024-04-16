function isArray(collection) {
    return Array.isArray(collection);
  }
  
  function objectKeys(collection) {
    return Object.keys(collection);
  }
  
  function objectValues(collection) {
    return Object.values(collection);
  }
  
  function myEach(collection, callback) {
    if (isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const keys = objectKeys(collection);
      for (let i = 0; i < keys.length; i++) {
        callback(collection[keys[i]]);
      }
    }
    return collection;
  }
  function myFind(collection, predicate) {
    let result;
    myEach(collection, function(value) {
      if (predicate(value) && !result) {
        result = value;
        return false; // Stop iteration
      }
    });
    return result;
  }
  
  function myMap(collection, callback) {
    const mappedArray = [];
    myEach(collection, function(value) {
      mappedArray.push(callback(value));
    });
    return mappedArray;
  }
  
  function myReduce(collection, callback, acc) {
    let start = 0;
    const values = isArray(collection) ? collection : objectValues(collection);
    if (!acc) {
      acc = values[0];
      start = 1;
    }
    let result = acc;
    for (let i = start; i < values.length; i++) {
      result = callback(result, values[i]);
    }
    return result;
  }
  
  function myEach(collection, callback) {
    if (isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i]) === false) { // Stop iteration if callback returns false
          break;
        }
      }
    } else {
      const keys = objectKeys(collection);
      for (let i = 0; i < keys.length; i++) {
        if (callback(collection[keys[i]]) === false) { // Stop iteration if callback returns false
          break;
        }
      }
    }
    return collection;
  }
  function myFilter(collection, predicate) {
    const filteredArray = [];
    myEach(collection, function(value) {
      if (predicate(value)) {
        filteredArray.push(value);
      }
    });
    return filteredArray;
  }
  
  function objectSize(collection) {
    return objectKeys(collection).length;
  }
  
  function mySize(collection) {
    return isArray(collection) ? collection.length : objectSize(collection);
  }
  
  function myFirst(array, n) {
    return n === undefined || n > array.length ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n) {
    return n === undefined || n >= array.length ? array[array.length - 1] : array.slice(-n);
  }
  
  // Additional functions
  function myKeys(object) {
    return objectKeys(object);
  }
  
  function myValues(object) {
    return objectValues(object);
  }

  
