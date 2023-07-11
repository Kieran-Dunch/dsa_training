const Queue = require('./Queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it('contains properties named `queue` and `size`', () => {
    expect(queue.hasOwnProperty('queue')).toBe(true);
    expect(queue.hasOwnProperty('size')).toBe(true);
  });

  it('should have a method named `enqueue` that adds new data', () => {
    expect(typeof queue.enqueue).toBe('function');
    queue.enqueue('some data');
    expect(queue.size).toBe(1);
    queue.enqueue('some other data');
    expect(queue.size).toBe(2);
  });

});
