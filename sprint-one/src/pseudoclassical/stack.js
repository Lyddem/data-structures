var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.nums = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.storage[++this.nums] = value;
};
Stack.prototype.size = function() {
  return this.nums;
};
Stack.prototype.pop = function() {
  if (this.nums > 0) {
    var val = this.storage[this.nums];
    delete val;
    this.nums--;
    return val;
  }
};

var test = new Stack();