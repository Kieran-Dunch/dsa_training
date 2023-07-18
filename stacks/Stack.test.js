const Stack = require('./Stack');

describe('Stack', () => {
  test('has a stack property', () => {
    const stack = new Stack();
    expect(stack).toHaveProperty('stack');
  });

  test('has a size property', () => {
    const stack = new Stack();
    expect(stack).toHaveProperty('size');
  });

  test('has a maxSize property', () => {
    const stack = new Stack();
    expect(stack).toHaveProperty('maxSize');
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

  test('peek returns null if stack is empty', () => {
    const stack = new Stack();
    expect(stack.peek()).toEqual(null);
  });

  test('has a push method', () => {
    const stack = new Stack();
    expect(typeof stack.push).toEqual('function');
  });

  test('push adds an element to the stack', () => {
    const stack = new Stack();
    stack.push('first');
    expect(stack.stack.head.data).toEqual('first');
    stack.push('second');
    expect(stack.stack.head.data).toEqual('second');
  });

  test('has a pop method', () => {
    const stack = new Stack();
    expect(typeof stack.pop).toEqual('function');
  });

  test('pop removes the head element from the stack', () => {
    const stack = new Stack();
    stack.push('first');
    stack.push('second');
    stack.pop();
    expect(stack.stack.head.data).toEqual('first');
  });

  test('stack has hasRoom method', () => {
    const stack = new Stack();
    expect(typeof stack.hasRoom).toEqual('function');
  });
});
