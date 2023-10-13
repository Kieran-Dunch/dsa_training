// The Sieve of Eratosthenes is one of the oldest-known algorithms, and it’s
// still helpful for deriving prime numbers! The algorithm is attributed to
// Eratosthenes, a Greek mathemetician born in the third century BCE.

// The algorithm consists of iteratively marking as composite (i.e., not prime)
// the multiples of each prime, starting with the multiples of 2.
//  The algorithm works as follows:
// 1. First, create a list of integers from two to some upper limit.
// 2. Start with a counter variable set to two (the smallest prime number).
// 3. Mark all multiples of two as composite (not prime).
// 4. Find the next number in the list greater than the current counter that is
// not marked as composite. This number is the next prime. Set the counter to
// this number.
// 5. Repeat steps 3 and 4 until the counter is greater than the specified
// maximum value.

const sieveOfEratosthenes = (max) => {
  const output = new Array(max + 1).fill(true);
  output[0] = false;
  output[1] = false;

  for (let i = 2; i <= max; i++) {
    if (output[i]) {
      for (let j = i * 2; j <= max; j += i) {
        output[j] = false;
      }
    }
  }

  return output.reduce((acc, curr, index, array) => {
    if (curr) {
      acc.push(index);
    }
    return acc;
  }, []);

};
