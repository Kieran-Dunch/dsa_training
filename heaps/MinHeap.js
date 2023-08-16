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

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
      || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
    );
  }

  popMin() {
    if (this.size === 0) return null;
    this.swap(1, this.size);
    const min = this.heap.pop();
    this.size--;
    return min;
  }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;
