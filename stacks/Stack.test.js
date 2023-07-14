const Stack = require('./Stack');

describe('Stack', () => {
  test('has a stack property', () => {
    const stack = new Stack();
    expect(stack).toHaveProperty('stack');
  });

  test('has a peek method', () => {
    const stack = new Stack();
    expect(typeof stack.peek).toEqual('function');
  });

  test('peek returns the first element in the stack', () => {
    const stack = new Stack();
    stack.stack.addToHead('first');
    expect(stack.peek()).toEqual('first');
    stack.stack.addToHead('second');
    expect(stack.peek()).toEqual('second');
  });
});
