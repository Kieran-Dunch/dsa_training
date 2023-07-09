// add test suite for the node class

const Node = require('./Node');

describe('Node', () => {
  it('should create a new node', () => {
    const node = new Node(1);
    expect(node).toBeDefined();
  });

  it('should contain data', () => {
    const node = new Node(1);
    expect(node.data).toBe(1);
  });

  it('should have a next property', () => {
    const node = new Node(1);
    expect(node.next).toBeDefined();
  });

  it('should have a next property that is null', () => {
    const node = new Node(1);
    expect(node.next).toBeNull();
  });

});

describe('Node methods', () => {
  it('should be able to get the next node', () => {
    const node = new Node(1);
    const nextNode = new Node(2);
    node.setNextNode(nextNode);
    expect(node.getNextNode()).toBe(nextNode);
  });

  it('should be able to set the next node', () => {
    const node = new Node(1);
    const nextNode = new Node(2);
    node.setNextNode(nextNode);
    expect(node.next).toBe(nextNode);
  });
});
