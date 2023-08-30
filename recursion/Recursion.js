const recursiveFactorial = (n) => {
  if (n > 0) {
    console.log(n);
    recursiveFactorial(n - 1);
  }
}
