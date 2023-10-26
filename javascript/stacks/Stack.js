const LinkedList = require('../LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  peek() {
    if (!this.isEmpty()) {
      const headData = this.stack.head.data;
      return headData;
    } else {
      return null;
    }
  }

  push(data) {
    if (this.hasRoom()) {
      this.stack.addToHead(data);
      this.size++;
    } else {
      throw new Error('Stack is full');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const removedHead = this.stack.removeHead();
      this.size--;
      return removedHead;
    } else {
      return null;
    }
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}



module.exports = Stack;
