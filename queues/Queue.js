const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }
}

module.exports = Queue;
