// A binary tree is a tree data structure in which each node has at most
// two children, which are referred to as the left child and the right child.
// This tree is organized in a hierarchical structure and is used to store data
// in a sorted manner. Binary trees are commonly used in computer science for
// searching and sorting operations. The left child of a node is always less
// than the parent node, and the right child of a node is always greater than
// the parent. This is called the binary search property.
class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }
}
