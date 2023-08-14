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
});
