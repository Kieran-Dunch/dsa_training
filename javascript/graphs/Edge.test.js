const Edge = require('./Edge');

describe('Edge', () => {
  test('should have a start, end, and weight property', () => {
    const edge = new Edge('A', 'B', 10);
    expect(edge.start).toBe('A');
    expect(edge.end).toBe('B');
    expect(edge.weight).toBe(10);
  });
});
