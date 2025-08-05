// Testing the rainwater trapping algorithms
// using jest

const { naiveRainwater, optimizedRainwater } = require('./Rainwater');

describe('naiveRainwater()', () => {
  it('should calculate trapped rainwater correctly', () => {
    // Example: [0,1,0,2,1,0,1,3,2,1,2,1] should trap 6 units of water
    const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    expect(naiveRainwater(heights)).toBe(6);
  });

  it('should return 0 for empty array', () => {
    expect(naiveRainwater([])).toBe(0);
  });

  it('should return 0 for single element', () => {
    expect(naiveRainwater([5])).toBe(0);
  });

  it('should handle decreasing heights', () => {
    const heights = [5, 4, 3, 2, 1];
    expect(naiveRainwater(heights)).toBe(0);
  });

  it('should handle simple case', () => {
    const heights = [3, 0, 2];
    expect(naiveRainwater(heights)).toBe(2);
  });
});

describe('optimizedRainwater()', () => {
  it('should calculate trapped rainwater correctly', () => {
    // Example: [0,1,0,2,1,0,1,3,2,1,2,1] should trap 6 units of water
    const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    expect(optimizedRainwater(heights)).toBe(6);
  });

  it('should return 0 for empty array', () => {
    expect(optimizedRainwater([])).toBe(0);
  });

  it('should return 0 for single element', () => {
    expect(optimizedRainwater([5])).toBe(0);
  });

  it('should handle simple case', () => {
    const heights = [3, 0, 2];
    expect(optimizedRainwater(heights)).toBe(2);
  });

  it('should match naive version results', () => {
    const heights = [2, 1, 2, 1, 4, 1, 2];
    const naiveResult = naiveRainwater(heights);
    const optimizedResult = optimizedRainwater(heights);
    expect(optimizedResult).toBe(naiveResult);
  });
});