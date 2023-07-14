const LinkedList = require('../LinkedList');

class BoundedQueue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  enqueue(data) {
    if (!this.hasRoom()) {
      console.log('Queue is full!');
      return null;
    }
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data}! Queue size is now ${this.size}.`);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty!');
      return null;
    }
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data}! Queue size is now ${this.size}.`);
    return data;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = BoundedQueue;
