// This is a file to test the Binary Tree class. You can run this test
// by running "npm test" from the project directory.

const BinaryTree = require('./BinaryTree');

describe('BinaryTree', () => {
  it('should create a tree', () => {
    const tree = new BinaryTree(6);
    expect(tree.value).toEqual(6);
    expect(tree.left).toBeNull();
    expect(tree.right).toBeNull();
  });

  it('should insert values', () => {
    const tree = new BinaryTree(6);
    tree.insert(3);
    tree.insert(9);
    expect(tree.left.value).toEqual(3);
    expect(tree.right.value).toEqual(9);
  });

  it('should insert values at the correct depth', () => {
    const tree = new BinaryTree(6);
    tree.insert(3);
    tree.insert(9);
    tree.insert(7);
    tree.insert(10);
    expect(tree.right.left.value).toEqual(7);
    expect(tree.right.right.value).toEqual(10);
  });

});
