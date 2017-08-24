var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference yteour old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.nums = 0;
  someInstance.storage = {};
  return someInstance;

};

var stackMethods = {
  push: function(value) {
    this.storage[++this.nums] = value;
  },
  pop: function() {
    if (this.nums > 0) {
      var val = this.storage[this.nums];
      delete this.storage[this.nums];
      this.nums--;
      return val;
    }
  },
  size: function() {
    return this.nums;
  }
};


