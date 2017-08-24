var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.nums = 0;
  someInstance.storage = {};
  return someInstance;

};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.nums++] = value;
  },

  dequeue: function() {
    var temp = this.storage[0];
    delete this.storage[0];
    if (this.nums > 0) {
      for (var key in this.storage){
        this.storage[key - 1] = this.storage[key];
        delete this.storage[key];
      }
        this.nums--;
    }
    return temp;
  },

  size: function() {
    return this.nums;
  }
};


