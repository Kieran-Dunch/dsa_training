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
});
