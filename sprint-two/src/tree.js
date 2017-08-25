var Tree = function(value) {
  var newTree = {
    value: 1,
    children: []
  };

  newTree.value = value;
  newTree.children = [];
  newTree.len = 0
  // fix me
  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Child(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {

};

var Child = function(val) {
  this.value = val;
  this.children = [];
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
