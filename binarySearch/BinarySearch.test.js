// testing the BinarySearch function
// using the jest testing framework

const BinarySearch = require('./BinarySearch.js');

describe('BinarySearch', () => {
  it('should return the index of the target value', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    expect(BinarySearch(arr, target)).toEqual(2);
  });

  it('should return null if the target value is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    expect(BinarySearch(arr, target)).toEqual(null);
  });

  it('should return the index of the target value in an array of length 1', () => {
    const arr = [1];
    const target = 1;
    expect(BinarySearch(arr, target)).toEqual(0);
  });
});
