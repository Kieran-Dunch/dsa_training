// We are implementing a solution to finding how much rainwater can be trapped
// in a given array of heights.


// naive solution
// time complexity: O(n^2)

const naiveRainwater = (heights) => {
  let totalWater = 0;
  for (let i = 0; i < heights.length - 1; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, heights[j]);
    }
    for (let j = i; j < heights.length; j++) {
      rightMax = Math.max(rightMax, heights[j]);
    }
    totalWater += Math.min(leftMax, rightMax) - heights[i];
  }
  return totalWater;
}

// optimized solution
// time complexity: O(n)

const optimizedRainwater = (heights) => {
  totalWater = 0;
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      leftMax = heights[left];
      totalWater += leftMax - heights[left];
      left++;
    } else {
      rightMax = heights[right];
      totalWater += rightMax - heights[right];
      right--;
    }
  }
}
