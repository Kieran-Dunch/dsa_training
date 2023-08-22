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

  describe('removeVertex', () => {
    it('should be a function', () => {
      const graph = new Graph();
      expect(typeof graph.removeVertex).toEqual('function');
    });

    it('should remove a vertex from the graph', () => {
      const graph = new Graph();
      const vertexA = graph.addVertex('A');
      const vertexB = graph.addVertex('B');
      const vertexC = graph.addVertex('C');
      graph.removeVertex(vertexB);
      expect(graph.vertices.length).toEqual(2);
      expect(graph.vertices).toEqual([vertexA, vertexC]);
    });
  });
});
