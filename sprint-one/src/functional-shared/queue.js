var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instanceObj = { num:0, memory:{} };
  _.extend(instanceObj,queueMethods);
  return instanceObj;
};

var queueMethods = {
  enqueue: function(value) {
    this.memory[this.num++] = value;
  },
  dequeue: function() {
    var tempVal = this.memory[0];
    delete this.memory[0];
    if (this.num > 0) {
      for(var key in this.memory){
        var newKey = key - 1;
        this.memory[newKey] = this.memory[key];
        delete this.memory[key];

      }
       this.num--;
    }
       return tempVal;

  },
  size :function() {
    return this.num;
  }
};


