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

  describe('isEmpty', () => {
    it('should be a function', () => {
      expect(typeof PriorityQueue.prototype.isEmpty).toEqual('function');
    });

    it('should return true if the queue is empty', () => {
      const queue = new PriorityQueue();
      expect(queue.isEmpty()).toEqual(true);
    });

    it('should return false if the queue is not empty', () => {
      const queue = new PriorityQueue();
      queue.add(5, 1);
      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe('popMin', () => {
    it('should be a function', () => {
      expect(typeof PriorityQueue.prototype.popMin).toEqual('function');
    });

    it('should return null if the queue is empty', () => {
      const queue = new PriorityQueue();
      expect(queue.popMin()).toEqual(null);
    });

    it('should return the minimum value in the queue', () => {
      const queue = new PriorityQueue();
      queue.add(5, 1);
      queue.add(6, 2);
      queue.add(7, 3);
      expect(queue.popMin().value).toEqual(5);
    });
  });

  describe('bubbleUp', () => {
    it('should be a function', () => {
      expect(typeof PriorityQueue.prototype.bubbleUp).toEqual('function');
    });

    it('should swap the last element with its parent if the parent is greater', () => {
      const queue = new PriorityQueue();
      queue.add(5, 1);
      queue.add(6, 2);
      queue.add(7, 3);
      queue.add(4, 0);
      expect(queue.heap[1].value).toEqual(4);
    });
  });

  describe('heapify', () => {
    it('should be a function', () => {
      expect(typeof PriorityQueue.prototype.heapify).toEqual('function');
    });
  });

  describe('swap', () => {
    it('should be a function', () => {
      expect(typeof PriorityQueue.prototype.swap).toEqual('function');
    });
  });
});
