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

  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild) && this.heap[leftChild] > this.heap[rightChild]) {
        this.swap(current, rightChild);
        current = rightChild;
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  swap(current, parent) {
    [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
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
    this.heapify();
    return min;
  }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;
