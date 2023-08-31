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

module.exports = {
  recursiveFactorial
};
