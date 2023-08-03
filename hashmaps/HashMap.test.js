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
      // TO-DO: temp fix, does not work with 0 size array
      const hashmap = new HashMap(1);
      hashmap.assign('assign-key', 'assign-value');
      expect(hashmap.hashmap[hashmap.hash('assign-key')].head.data.key).toBe('assign-key');
    });

    it('should assign a value to a key in a hashmap of any size', () => {
      const hashmap = new HashMap(10);
      hashmap.assign('key', 'value');
      expect(hashmap.hashmap[hashmap.hash('key')].head.data.key).toBe('key');
    });

    it('should assign a value to the end of a linked list', () => {
      const hashmap = new HashMap(1);
      hashmap.assign('key', 'value');
      hashmap.assign('key2', 'value2');
      expect(hashmap.hashmap[hashmap.hash('key')].head.next.data.key).toBe('key2');
    })
  });

  // retrieve method
  describe('retrieve', () => {

    it('should have a method called retrieve', () => {
      const hashmap = new HashMap();
      expect(hashmap.retrieve).toBeDefined();
    });

    it('should retrieve a value from a key', () => {
      const hashmap = new HashMap(10);
      hashmap.assign('key', 'value');
      expect(hashmap.retrieve('key')).toBe('value');
    });

    it('should retrieve a value from a linked list with multiple values', () => {
      const hashmap = new HashMap(1);
      hashmap.assign('key', 'value');
      hashmap.assign('key2', 'value2');
      expect(hashmap.retrieve('key2')).toBe('value2');
    });
  });
});
