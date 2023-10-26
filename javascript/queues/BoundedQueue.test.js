const BoundedQueue = require('./BoundedQueue');

describe('BoundedQueue', () => {
  let queue;
  beforeEach(() => {
    queue = new BoundedQueue(3);
  });

  it('contains properties named `queue`, `size` and `maxSize`', () => {
    expect(queue.hasOwnProperty('queue')).toBe(true);
    expect(queue.hasOwnProperty('size')).toBe(true);
    expect(queue.hasOwnProperty('maxSize')).toBe(true);
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

  it('should not allow queue to grow larger than maxSize', () => {
    queue.enqueue('some data');
    queue.enqueue('some other data');
    queue.enqueue('some more data');
    expect(queue.size).toBe(3);
    queue.enqueue('even more data');
    expect(queue.size).toBe(3);
  });

  it('should not allow queue to shrink smaller than 0', () => {
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it('should have a method called `hasRoom` that returns true if queue is not full', () => {
    queue = new BoundedQueue(3);
    expect(typeof queue.hasRoom).toBe('function');
    expect(queue.hasRoom()).toBe(true);
    queue.enqueue('some data');
    queue.enqueue('some other data');
    queue.enqueue('some more data');
    expect(queue.hasRoom()).toBe(false);
  });

  it('should have a method called `isEmpty` that returns true if queue is empty', () => {
    expect(typeof queue.isEmpty).toBe('function');
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('some data');
    expect(queue.isEmpty()).toBe(false);
  });
});
