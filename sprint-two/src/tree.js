var Tree = function(value) {
  var newTree = {};;

  newTree.value = value;
  newTree.children = [];
  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var recurse = function(node) {
    if (node.value === target) {
      return true;
    } else {
      var result = false;
      for (var i = 0; i < node.children.length; i++) {
        result = recurse(node.children[i]);
        if (result === true) {
          return true;
        }
      }
      return result;
    }
  };
  return recurse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?

 addChild O(1)
 contains O(2^n)
 */
