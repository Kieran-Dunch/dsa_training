// testing the mergeSort function
// using jest

const mergeSort = require('./MergeSort');

describe('mergeSort()', () => {
  it('should sort an array of numbers', () => {
    const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    mergeSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
