

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.names = [];
};

HashTable.prototype.insert = function(key, val) { // 'steven' 'Seagal'
  var index = getIndexBelowMaxForKey(key, this._limit); //2

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, val);
    this.names[index] = key;
  }  else {
      var miniArr = [this.names[index],this._storage.get(index)];
      this._storage.set(index,[miniArr]);
      var element = this._storage.get(index);

          for (var i = 0; i <= element.length; i++) {
            if (i === element.length) {
            element.push([key, val]);
             break;
          }
          //overwriting value if key is the same
            if(element[i][0] === key) {
              element[i][1] = val;
              break;
            }
          }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   if (Array.isArray(this._storage.get(index))) {
    var arr = this._storage.get(index);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === k) {
        return arr[i][1];
      }
    }
 }
 return this._storage.get(index);
}

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index,undefined);
  if (Array.isArray(this._storage.get(index))) {
    var arr = this._storage.get(index);
    var idx = -1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === k) {
       idx = i;
       break
      }
    }
    arr.splice(idx,1);
    this._storage.set(index,arr);
  } else {
    this._storage.set(index,undefined);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert O(1), worstCase O(n)
 retrieve O(1), worstCase O(n)
 remove O(1), worstCase O(n)
 */


