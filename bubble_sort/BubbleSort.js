
// the swap is the key component of bubble sort
// it swaps the values of two indexes in an array using a temp variable
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubbleSort = arr => {
  let swapping = true;
  while (swapping) {
    swapping = false;
    for (let i = 0; i < arr.length; i++) {
      // if the current value is greater than the next value, swap them
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapping = true;
      }
    }
  }
};
