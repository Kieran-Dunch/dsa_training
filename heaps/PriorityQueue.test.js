// test file for PriorityQueue.js

const PriorityQueue = require('./PriorityQueue');

describe('PriorityQueue', () => {
  it('should be a class', () => {
    expect(PriorityQueue.prototype.constructor).toEqual(PriorityQueue);
  });

  describe('add', () => {
    it('should be a function', () => {
      expect(typeof PriorityQueue.prototype.add).toEqual('function');
    });

    it('should add a value to the heap', () => {
      const queue = new PriorityQueue();
      queue.add(5, 1);
      expect(queue.heap.length).toEqual(2);
      expect(queue.heap[1].value).toEqual(5);
    });

    it('should include a priority with the value', () => {
      const queue = new PriorityQueue();
      queue.add(5, 1);
      expect(queue.heap.length).toEqual(2);
      expect(queue.heap[1].value).toEqual(5);
      expect(queue.heap[1].priority).toEqual(1);
    });
  });
});
