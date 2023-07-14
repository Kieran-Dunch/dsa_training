const LinkedList = require('../LinkedList');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  peek() {
    const headData = this.stack.head.data;
    return headData;
  }
}



module.exports = Stack;
