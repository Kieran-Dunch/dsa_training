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
}
