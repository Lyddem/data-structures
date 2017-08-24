
var Stack = function() {

  var someInstance = {};
  someInstance.nums = 0;
  someInstance.storage = {};
    _.extend(someInstance, stackMethods);


  return someInstance;
};


var stackMethods = {

 push: function(value){
  this.nums++;
  this.storage[this.nums] = value;
 },
 pop: function(){
  if (this.nums > 0) {
      var val = this.storage[this.nums];
      delete this.storage[this.nums];
      this.nums--;
      return val;
    }
 },
 size: function(){
  return this.nums;
 }

};
