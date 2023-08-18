const Graph = require('./Graph');

describe('Graph', () => {
  it('should have a vertices property', () => {
    const graph = new Graph();
    expect(graph.vertices).toEqual([]);
  });
});
