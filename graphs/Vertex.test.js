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

    it('should add a weighted edge to the vertex if graph is weighted', () => {
      const vertexA = new Vertex('A');
      const vertexB = new Vertex('B');
      vertexA.addEdge(vertexB, 10);
      expect(vertexA.edges.length).toEqual(1);
      expect(vertexA.edges[0].weight).toEqual(10);
    });
  });

  describe('removeEdge', () => {
    it('should be a function', () => {
      const vertex = new Vertex('A');
      expect(typeof vertex.removeEdge).toEqual('function');
    });

    it("should remove the edge from the vertex's edges", () => {
      const vertexA = new Vertex('A');
      const vertexB = new Vertex('B');
      vertexA.addEdge(vertexB);
      expect(vertexA.edges.length).toEqual(1);
      vertexA.removeEdge(vertexB);
      expect(vertexA.edges.length).toEqual(0);
    });
  });
});
