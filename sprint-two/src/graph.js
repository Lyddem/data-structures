// Instantiate a new graph
var Graph = function() {
  this.vertex = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertex.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertex.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.vertex.indexOf(node);
  if (index !== -1) {
    this.vertex.splice(index,1);
    for (var i = 0; i < this.edges.length; i++) {
      if (node === this.edges[i][0] || node === this.edges[i][1]) {
        this.edges.splice(i,1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if ((fromNode === this.edges[i][0] && toNode === this.edges[i][1]) || (toNode === this.edges[i][0] && fromNode === this.edges[i][1]))  {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.vertex.includes(fromNode) && this.vertex.includes(toNode)) {
    this.edges.push([fromNode,toNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.edges.length; i++) {
    if ((fromNode === this.edges[i][0] && toNode === this.edges[i][1]) || (toNode === this.edges[i][0] && fromNode === this.edges[i][1])) {
      this.edges.splice(i,1);
      break;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.vertex.length; i++) {
     cb(this.vertex[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

    addNode O(1);
    contains O(n)
    removeNode O(n)
    hasEdge O(n)
    addEdge O(1)
    removeEdge O(n)
    forEachNode O(n);

 */


