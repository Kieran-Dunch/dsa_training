// basic recursive case
const recursiveFactorial = (n) => {

  // recursive case
  if (n > 0) {
    return n * recursiveFactorial(n - 1);
  }

  // base case
  if (n === 0) {
    return 1;
  }
}

// finding a node in linked list using recursion
// look in linkedList.js

module.exports = {
  recursiveFactorial
};
