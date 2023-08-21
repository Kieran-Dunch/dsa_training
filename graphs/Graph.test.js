const Graph = require('./Graph');

describe('Graph', () => {
  it('should have a vertices property', () => {
    const graph = new Graph();
    expect(graph.vertices).toEqual([]);
  });

  describe('addVertex', () => {
    it('should be a function', () => {
      const graph = new Graph();
      expect(typeof graph.addVertex).toEqual('function');
    });

    it('should add a vertex to the graph', () => {
      const graph = new Graph();
      graph.addVertex('A');
      expect(graph.vertices.length).toEqual(1);
      expect(graph.vertices[0].data).toEqual('A');
    });
  });
});
