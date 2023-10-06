// A priority queue is a specialized from of Minheap that prioritizes the
// smallest value in the heap. It is a useful data structure for tasks that
// require the processing of elements in order of priority. For example, a
// priority queue can be used to implement Djikstra's algorithm, which finds
// the shortest path between two vertices in a graph.

class PriorityQueue {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  add(value, priority) {
    this.heap.push({ value, priority });
    this.size++;
    this.bubbleUp();
  }

  isEmpty() {
    return this.size === 0;
  }

  popMin() {
    if (this.size === 0) {
      return null;
    }
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap.pop();
    this.size--;
    this.heapify();
    return min;
  }

  bubbleUp() {
    let current = this.size;
    while (current > 1 && this.heap[getParent(current)].priority > this.heap[current].priority) {
      this.swap(current, getParent(current));
      current = getParent(current);
    }
  }

  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (this.heap[leftChild].priority < this.heap[rightChild].priority) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    return (
      this.exists(leftChild) && this.heap[current].priority > this.heap[leftChild].priority ||
      this.exists(rightChild) && this.heap[current].priority > this.heap[rightChild].priority
    );
  }
}

const getParent = (current) => Math.floor(current / 2);
const getLeft = (current) => current * 2;
const getRight = (current) => current * 2 + 1;

module.exports = PriorityQueue;
