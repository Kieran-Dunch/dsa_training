const TreeNode = require('./TreeNode');

describe('TreeNode', () => {
  it('should create a new TreeNode', () => {
    const node = new TreeNode(1);
    expect(node).toBeDefined();
  });

  it('should contain data', () => {
    const node = new TreeNode(1);
    expect(node.data).toBe(1);
  });

  it('should have a children property', () => {
    const node = new TreeNode(1);
    expect(node.children).toBeDefined();
  });

  it('should have a children property that is an array', () => {
    const node = new TreeNode(1);
    expect(Array.isArray(node.children)).toBe(true);
  });

  it('should have a children property that is empty', () => {
    const node = new TreeNode(1);
    expect(node.children.length).toBe(0);
  });

  describe('addChild', () => {
    it('should add a child node', () => {
      const node = new TreeNode(1);
      const childNode = new TreeNode(2);
      node.addChild(childNode);
      expect(node.children.length).toBe(1);
    });

    it('should add a child node with the correct data', () => {
      const node = new TreeNode(1);
      const childNode = new TreeNode(2);
      node.addChild(childNode);
      expect(node.children[0].data).toBe(2);
    });
  });

  describe('removeChild', () => {
    it('should remove a child node', () => {
      const node = new TreeNode(1);
      const childNode = new TreeNode(2);
      node.addChild(childNode);
      node.removeChild(childNode);
      expect(node.children.length).toBe(0);
    });

    it('should remove a child node with the correct data', () => {
      const node = new TreeNode(1);
      const childNode = new TreeNode(2);
      node.addChild(childNode);
      node.removeChild(childNode);
      expect(node.children[0]).toBeUndefined();
    });
  });

  describe('print', () => {
    it('should print the node data', () => {
      const spy = jest.spyOn(console, 'log');
      const node = new TreeNode(1);
      node.print();
      expect(spy).toHaveBeenCalledWith("1");
    });
  });

  describe('depthFirstTraversal', () => {
    it('should print the node data', () => {
      const spy = jest.spyOn(console, 'log');
      const node = new TreeNode(1);
      node.depthFirstTraversal();
      expect(spy).toHaveBeenCalledWith(1);
    });

    it('should print the node data and its children', () => {
      const spy = jest.spyOn(console, 'log');
      const node = new TreeNode(1);
      const childNode = new TreeNode(2);
      node.addChild(childNode);
      node.depthFirstTraversal();
      expect(spy).toHaveBeenCalledWith(1);
      expect(spy).toHaveBeenCalledWith(2);
    });
  });

  describe('breadthFirstTraversal', () => {
    it('should print the node data', () => {
      const spy = jest.spyOn(console, 'log');
      const node = new TreeNode(1);
      node.breadthFirstTraversal();
      expect(spy).toHaveBeenCalledWith(1);
    });

    it('should print the node data and its children', () => {
      const spy = jest.spyOn(console, 'log');
      const node = new TreeNode(1);
      const childNode = new TreeNode(2);
      node.addChild(childNode);
      node.breadthFirstTraversal();
      expect(spy).toHaveBeenCalledWith(1);
      expect(spy).toHaveBeenCalledWith(2);
    });
  });
});
