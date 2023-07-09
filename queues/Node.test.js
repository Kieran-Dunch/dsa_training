// test the node class
const Node = require('./Node');

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can create a new node', () => {
  const node = new Node('test');
  expect(node.data).toEqual('test');
  expect(node.next).toEqual(null);
});

test('Node can point to another node', () => {
  const node1 = new Node('test1');
  const node2 = new Node('test2');
  node1.setNextNode(node2);
  expect(node1.next).toEqual(node2);
});

test('Node can return next node', () => {
  const node1 = new Node('test1');
  const node2 = new Node('test2');
  node1.setNextNode(node2);
  expect(node1.getNextNode()).toEqual(node2);
});
