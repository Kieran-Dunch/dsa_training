const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;
  let mid = Math.floor((left + right) / 2);

  // while (left <= right) {
  //   mid = Math.floor((left + right) / 2);

  //   if (arr[mid] === target) {
  //     return mid;
  //   } else if (arr[mid] < target) {
  //     left = mid + 1;
  //   } else if (arr[mid] > target) {
  //     right = mid - 1;
  //   }
  // }

  // return -1;
}
