var Tree = function(value) {
  var newTree = {

  };

  newTree.value = value;
  newTree.children = [];
  newTree.len = 0;
  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {
  var child = new Child(value);
      this.children.push(child);
      //tree.addChild(5);
//tree.children[0].addChild(6);
};

treeMethods.contains = function(target) {
// {value:undefined,children:[{value:5,children:[]}]}
  /* {value:undefined,children:[{value:5,children:[value:6,children:[]}]}
      1
     2 3
  4 5  6 7  target = 6    children [ {value, children[]}]
  */
  //{value:undefined,children:[{value:5,children[]}]}
  var recurse = function(node) {
     if (node.value === target) {
        return true;
      } else {
        var result = false;
        for (var i = 0; i < node.children.length; i++) {
            result = recurse(node.children[i]);
        }
        return result;
      }
    }
   return recurse(this);
  }

var Child = function(val) {
  this.value = val;
  this.children = [];
};
// last children = [], return false;
/*
 * Complexity: What is the time complexity of the above functions?
 */
