// testing the quickSort function
// using jest

const quickSort = require('./QuickSort');

describe('quickSort()', () => {
  it('should sort an array of numbers', () => {
    const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
