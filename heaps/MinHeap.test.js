const MinHeap = require('./MinHeap');

describe('MinHeap', () => {
  it('should create a heap', () => {
    const minHeap = new MinHeap();
    expect(minHeap).toBeDefined();
  });

  it('should have a size property', () => {
    const minHeap = new MinHeap();
    expect(minHeap.size).toBeDefined();
  });

  it('should have a heap property', () => {
    const minHeap = new MinHeap();
    expect(minHeap.heap).toBeDefined();
  });

  describe('add', () => {
    it('should be a function', () => {
      const minHeap = new MinHeap();
      expect(typeof minHeap.add).toBe('function');
    });

    it('should add a value to the heap', () => {
      const minHeap = new MinHeap();
      minHeap.add(1);
      expect(minHeap.heap.length).toBe(2);
    });
  });

  describe('bubbleUp', () => {
    it('should be a function', () => {
      const minHeap = new MinHeap();
      expect(typeof minHeap.bubbleUp).toBe('function');
    });

    it('should swap a value with its parent if it is smaller', () => {
      const minHeap = new MinHeap();
      minHeap.add(1);
      minHeap.add(2);
      expect(minHeap.heap[1]).toBe(1);
    });

    it('should swap a value with its grandparent if it is smaller', () => {
      const minHeap = new MinHeap();
      minHeap.add(1);
      minHeap.add(2);
      minHeap.add(5);
      expect(minHeap.heap[1]).toBe(1);
    });
  });

  describe('swap', () => {
    it('should be a function', () => {
      const minHeap = new MinHeap();
      expect(typeof minHeap.swap).toBe('function');
    });

    it('should swap two values in the heap', () => {
      const minHeap = new MinHeap();
      minHeap.add(1);
      minHeap.add(2);
      minHeap.swap(1, 2);
      expect(minHeap.heap[1]).toBe(2);
    });
  });
});
