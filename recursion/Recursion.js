const recursiveFactorial = (n) => {
  if (n > 0) {
    console.log(n);
    return n * recursiveFactorial(n - 1);
  }
}


module.exports = {
  recursiveFactorial
};
