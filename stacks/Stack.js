const LinkedList = require('../LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  peek() {
    if (this.size > 0) {
      const headData = this.stack.head.data;
      return headData;
    } else {
      return null;
    }
  }

  push(data) {

    this.stack.addToHead(data);
  }

  pop() {
    if (this.size > 0) {
      const removedHead = this.stack.removeHead();
      this.size--;
      return removedHead;
    } else {
      return null;
    }
  }
}



module.exports = Stack;
