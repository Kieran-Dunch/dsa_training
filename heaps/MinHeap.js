class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  add(value) {
    this.heap.push(value);
    this.size++;
  }

  bubbleUp() {
    let current = this.size;
    console.log('current', current);
  }
}

module.exports = MinHeap;
