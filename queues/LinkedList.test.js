// Test suite for LinkedList class

const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  it('should create a new linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeDefined();
  });

  it('should have a head property', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeDefined();
  });

  it('should have a head property that is null', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });
});

describe('LinkedList methods', () => {
  it('should be able to add a new node to the head', () => {
    const linkedList = new LinkedList();
    linkedList.addToHead(1);
    expect(linkedList.head.data).toBe(1);
    linkedList.addToHead(2);
    expect(linkedList.head.data).toBe(2);
  });

  it('should be able to add a new node to the tail', () => {
    const linkedList = new LinkedList();
    linkedList.addToTail(1);
    expect(linkedList.head.data).toBe(1);
    linkedList.addToTail(2);
    expect(linkedList.head.next.data).toBe(2);
  });

  it('should be able to remove the head', () => {
    const linkedList = new LinkedList();
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    expect(linkedList.head.data).toBe(2);
    linkedList.removeHead();
    expect(linkedList.head.data).toBe(1);
  });

  it('should be able to print the list', () => {
    const linkedList = new LinkedList();
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    expect(linkedList.printList()).toBe('3, 2, 1');
  });
});
