// test suite for HashMap class

const HashMap = require('./HashMap');

describe('HashMap', () => {
  it('should create a new hashmap', () => {
    const hashmap = new HashMap();
    expect(hashmap).toBeDefined();
  });

  // hash method
  describe('hash', () => {
    it('should hash a key', () => {
      const hashmap = new HashMap();
      const hash = hashmap.hash('key');
      expect(hash).toBeDefined();
    });

    it('should hash a key to a number', () => {
      const hashmap = new HashMap();
      const hash = hashmap.hash('key');
      expect(typeof hash).toBe('number');
    });

    it('should hash a key to a number less than the size of the hashmap', () => {
      const hashmap = new HashMap(10);
      const hash = hashmap.hash('key-for-testing-purposes-only');
      expect(hash).toBeLessThan(hashmap.hashmap.length);
    });
  });

  // assign method
  describe('assign', () => {
    it('should assign a value to a key', () => {
      console.log('assign');
      const hashmap = new HashMap();
      hashmap.assign('key', 'value');
      expect(hashmap.hashmap[hashmap.hash('key')].head).toBe('value');
    });

    it('should assign a value to a key in a hashmap of any size', () => {
      console.log('assign size');
      const hashmap = new HashMap(10);
      hashmap.assign('key', 'value');
      expect(hashmap.hashmap[hashmap.hash('key')].head.value).toBe('value');
    });

    it('should assign a value to a key in a linked list', () => {
      console.log('assign linked list');
      const hashmap = new HashMap();
      hashmap.assign('key', 'value');
      expect(hashmap.hashmap[hashmap.hash('key')].head.value).toBe('value');
    });
  });

  // retrieve method
  describe('retrieve', () => {

    it('should have a method called retrieve', () => {
      const hashmap = new HashMap();
      expect(hashmap.retrieve).toBeDefined();
    });

    it('should retrieve a value from a key', () => {
      const hashmap = new HashMap();
      hashmap.assign('key', 'value');
      expect(hashmap.retrieve('key')).toBe('value');
    });
  });
});
