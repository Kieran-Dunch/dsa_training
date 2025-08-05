// Testing the Sieve of Eratosthenes algorithms
// using jest

const { sieveOfEratosthenes, sieveOfEratosthenesOpt } = require('./Eratosthenes');

describe('sieveOfEratosthenes()', () => {
  it('should find all prime numbers up to 10', () => {
    const result = sieveOfEratosthenes(10);
    expect(result).toEqual([2, 3, 5, 7]);
  });

  it('should return empty array for numbers less than 2', () => {
    expect(sieveOfEratosthenes(1)).toEqual([]);
    expect(sieveOfEratosthenes(0)).toEqual([]);
  });

  it('should find prime numbers up to 30', () => {
    const result = sieveOfEratosthenes(30);
    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});

describe('sieveOfEratosthenesOpt()', () => {
  it('should find all prime numbers up to 10', () => {
    const result = sieveOfEratosthenesOpt(10);
    expect(result).toEqual([2, 3, 5, 7]);
  });

  it('should handle edge cases', () => {
    expect(sieveOfEratosthenesOpt(1)).toEqual([]);
    expect(sieveOfEratosthenesOpt(0)).toEqual([]);
    expect(sieveOfEratosthenesOpt(2)).toEqual([2]);
  });

  it('should find prime numbers up to 30', () => {
    const result = sieveOfEratosthenesOpt(30);
    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it('should match non-optimized version results', () => {
    const limit = 50;
    const nonOptResult = sieveOfEratosthenes(limit);
    const optResult = sieveOfEratosthenesOpt(limit);
    expect(optResult).toEqual(nonOptResult);
  });
});