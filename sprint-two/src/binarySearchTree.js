var BinarySearchTree = function(value) {

var binaryTree = Object.create(biTreeMethods);

binaryTree.value = value;
binaryTree.left = null;
binaryTree.right = null;

return binaryTree;
}

var biTreeMethods = {};
biTreeMethods.insert = function (value) {
  var current = this;
  var node = new BinarySearchTree(value);
    while(current !== null) {
      if(node.value < current.value) {
        if(current.left === null) {
          current.left = node;
          break;
        }
        current = current.left;

      } else if (node.value > current.value) {
        if(current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
};

biTreeMethods.contains = function(val) {

  function recursion(root) {
    if(root === null) {
      return false;
    } else {
      if(root.value > val) {
        return recursion(root.left);
      } else if(root.value < val) {
        return recursion(root.right)
      } else {
        return true;
      }
    }
  }
  return recursion(this)
};

biTreeMethods.depthFirstLog = function(cb) {

  function recurse (root) {
  if(root.left !== null) {
     cb(root.value);
     return recurse(root.left);
  }
  if(root.right !== null) {
    cb(root.value);
    return recurse(root.right);
  }
  if(root.left === null && root.right == null){
    cb(root.value);
    return root;
  }

  }
return recurse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert O(logn);
 contains O(logn);
 depthFirstLog O(n);
 */






