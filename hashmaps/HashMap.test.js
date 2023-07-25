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
      const hashmap = new HashMap();
      hashmap.assign('key', 'value');
      expect(hashmap.hashmap[hashmap.hash('key')]).toBe('value');
    });

    it('should assign a value to a key in a hashmap of any size', () => {
      const hashmap = new HashMap(10);
      hashmap.assign('key', 'value');
      expect(hashmap.hashmap[hashmap.hash('key')]).toBe('value');
    });
  });
});
