// Create a node class to interact with our data structures

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  // Add a method to the node class that will allow us to point to the next node
  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error('Next node must be a member of the Node class');
    }
    this.next = node;
  }

  // Add a method allowing us to set the next data
  setNext(data) {
    this.next = data;
  }

  // Allow us to get the next node
  getNextNode() {
    return this.next;
  }
}

// export
module.exports = Node;
