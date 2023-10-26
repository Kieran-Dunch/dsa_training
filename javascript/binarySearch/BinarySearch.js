const binarySearch = (arr, target) => {
  // set the left and right pointers
  let left = 0;
  let right = arr.length;

  while (left < right) {
    // find the mid point or the index to compare against
    let mid = Math.floor((left + right) / 2);

    // check if the mid point is the target
    if (arr[mid] === target) {
      // return the index
      return mid;
    } else if (arr[mid] < target) {
      // if the target is greater than the mid point, move the left pointer
      left = mid + 1;
    } else if (arr[mid] > target) {
      // if the target is less than the mid point, move the right pointer
      right = mid;
    }
  }
  // if the target is not found, return null
  return null;
}


// Binary search will always be O(log n) because it cuts the search space in
// half each iteration. This is because the search space is always sorted.
// If the search space is not sorted, then binary search will not work.


module.exports = binarySearch;
