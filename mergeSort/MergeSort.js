const merge = (leftArr, rightArr) => {
  const sortedArray = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }

  return sortedArray.concat(leftArr.slice().concat(rightArr.slice()));
};


const mergeSort = (arr) => {
  // base case is when the array is length 1
  if (arr.length < 2) return arr;

  // separate the array into two halves using middle as the pivot
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle, arr.length);

  // recursively call mergeSort on each half
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
