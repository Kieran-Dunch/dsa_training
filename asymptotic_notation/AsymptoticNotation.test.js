// Testing the AsymptoticNotation file

// Imports
const AsymptoticNotation = require('./AsymptoticNotation');

// Test Suite
describe('AsymptoticNotation', () => {
  describe('contains()', () => {
    it('should return true if the item is found', () => {
      const items = ['foo', 'bar', 'baz'];
      const match = 'bar';
      expect(AsymptoticNotation.contains(items, match)).toBe(true);
    });
    it('should return false if the item is not found', () => {
      const items = ['foo', 'bar', 'baz'];
      const match = 'qux';
      expect(AsymptoticNotation.contains(items, match)).toBe(false);
    });
  });
});
