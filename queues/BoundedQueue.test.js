const BoundedQueue = require('./BoundedQueue');

describe('BoundedQueue', () => {
  let queue;
  beforeEach(() => {
    queue = new BoundedQueue();
  });

  it('contains properties named `queue` and `size`', () => {
    expect(queue.hasOwnProperty('queue')).toBe(true);
    expect(queue.hasOwnProperty('size')).toBe(true);
  });

  it('should have a method named `enqueue` that adds new data and prints to console', () => {
    expect(typeof queue.enqueue).toBe('function');
    queue.enqueue('some other data');
    expect(queue.size).toBe(1);

    const spy = jest.spyOn(console, 'log');
    queue.enqueue('some more data');
    expect(spy).toHaveBeenCalledWith('Added some more data! Queue size is now 2.');
  });

  it('should have a method named `dequeue` that removes data and prints to console', () => {
    expect(typeof queue.dequeue).toBe('function');
    queue.enqueue('some data');
    queue.enqueue('some other data');
    expect(queue.size).toBe(2);
    const spy = jest.spyOn(console, 'log');
    queue.dequeue();
    expect(spy).toHaveBeenCalledWith('Removed some data! Queue size is now 1.');
    expect(queue.size).toBe(1);
    queue.dequeue();
    expect(spy).toHaveBeenCalledWith('Removed some other data! Queue size is now 0.');
  });
});
