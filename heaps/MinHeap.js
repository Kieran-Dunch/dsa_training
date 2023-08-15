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
    let parent = getParent(current);
    while (current > 1 && this.heap[parent] > this.heap[current]) {
      this.swap(current, parent);
      current = parent;
    }
  }

  swap(current, parent) {
    [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
  }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;
