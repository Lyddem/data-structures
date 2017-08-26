var BinarySearchTree = function(value) {

var binaryTree = {};

binaryTree.root = new treeNode(value);

_.extend(binaryTree,biTreeMethods);
return binaryTree;
}

var biTreeMethods = {};
biTreeMethods.insert = function (value) {
   var newNode = new treeNode(value);
    if (this.root === undefined) {
      this.root = newNode;
    } else {
      var currentNode = this.root //5
        while (currentNode !== null) {
          if (currentNode.value > value) {
              if(currentNode.left === null) {
               currentNode.left = newNode;
                break;
              }
             currentNode = currentNode.left;  // undefined
          } else {
            if(currentNode.right === null) {
               currentNode.right = newNode;
                break;
              }
            currentNode = currentNode.right;
          }
        }
      }
};


biTreeMethods.contains = function() {
};

biTreeMethods.depthFirstLog = function() {
};


  function treeNode(val){
    var  node ={}
    node.value = val;
    node.left = null;
    node.right = null;
    return node
  }

/*
 * Complexity: What is the time complexity of the above functions?
 */






