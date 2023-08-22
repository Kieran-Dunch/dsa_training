const Vertex = require('./Vertex');

describe('Vertex', () => {
  it('should have a data and edges property', () => {
    const vertex = new Vertex('A');
    expect(vertex.data).toBe('A');
    expect(vertex.edges).toEqual([]);
  });

  describe('addEdge', () => {
    it('should be a function', () => {
      const vertex = new Vertex('A');
      expect(typeof vertex.addEdge).toEqual('function');
    });

    it('should add an edge to the vertex', () => {
      const vertexA = new Vertex('A');
      const vertexB = new Vertex('B');
      vertexA.addEdge(vertexB);
      expect(vertexA.edges.length).toEqual(1);
      expect(vertexA.edges[0].start).toEqual(vertexA);
      expect(vertexA.edges[0].end).toEqual(vertexB);
    });

    it('should throw an error if the argument is not a vertex', () => {
      const vertex = new Vertex('A');
      expect(() => vertex.addEdge('B')).toThrow();
    });
  });
});
