var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    delete storage[0];
    if (size > 0) {
      for (var key in storage) {
        var newKey = key - 1;
        storage[newKey] = storage[key];
        delete storage[key];
      }
      size--;
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
