// test suite for HashMap class

const HashMap = require('./HashMap');


describe('HashMap', () => {
  it('should create a new hashmap', () => {
    const hashmap = new HashMap();
    expect(hashmap).toBeDefined();
  });
});
