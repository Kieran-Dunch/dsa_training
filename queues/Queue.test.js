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
});
