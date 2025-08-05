// Testing the recursive factorial function
// using jest

const { recursiveFactorial } = require('./Recursion');

describe('recursiveFactorial()', () => {
  it('should calculate factorial of 0', () => {
    expect(recursiveFactorial(0)).toBe(1);
  });

  it('should calculate factorial of positive numbers', () => {
    expect(recursiveFactorial(1)).toBe(1);
    expect(recursiveFactorial(2)).toBe(2);
    expect(recursiveFactorial(3)).toBe(6);
    expect(recursiveFactorial(4)).toBe(24);
    expect(recursiveFactorial(5)).toBe(120);
  });

  it('should calculate factorial of larger numbers', () => {
    expect(recursiveFactorial(6)).toBe(720);
    expect(recursiveFactorial(7)).toBe(5040);
  });

  it('should handle edge case of 1', () => {
    expect(recursiveFactorial(1)).toBe(1);
  });
});