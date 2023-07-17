const LinkedList = require('../LinkedList');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  peek() {
    const headData = this.stack.head.data;
    return headData;
  }

  push(data) {
    this.stack.addToHead(data);
  }

  pop() {
    const removedHead = this.stack.removeHead();
    return removedHead;
  }
}



module.exports = Stack;
