var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var node = new Node(value);

    if(list.tail === null){
      list.head = node;
      list.tail = node; //list.head;

    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };
  list.removeHead = function() {
    var currentNode = list.head;
    list.head = currentNode.next;
    return currentNode.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      console.log(currentNode);
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/* Complexity
addToTail 0(1)
removeHead 0(1)
contains 0(n)
*/
