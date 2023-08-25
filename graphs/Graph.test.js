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

  describe('addEdge', () => {
    it('should be a function', () => {
      const graph = new Graph();
      expect(typeof graph.addEdge).toEqual('function');
    });

    it('should add an edge between two vertices', () => {
      const graph = new Graph();
      const vertexA = graph.addVertex('A');
      const vertexB = graph.addVertex('B');
      graph.addEdge(vertexA, vertexB);
      expect(vertexA.edges.length).toEqual(1);
      expect(vertexB.edges.length).toEqual(1);
      expect(vertexA.edges[0].start).toEqual(vertexA);
      expect(vertexA.edges[0].end).toEqual(vertexB);
      expect(vertexB.edges[0].start).toEqual(vertexB);
      expect(vertexB.edges[0].end).toEqual(vertexA);
    });

    it('should add a weighted edge between two vertices if graph is weighted', () => {
      const graph = new Graph(true);
      const vertexA = graph.addVertex('A');
      const vertexB = graph.addVertex('B');
      graph.addEdge(vertexA, vertexB, 1);
      expect(vertexA.edges[0].weight).toEqual(1);
      expect(vertexB.edges[0].weight).toEqual(1);
    });
  });

  describe('removeEdge', () => {
    it('should be a function', () => {
      const graph = new Graph();
      expect(typeof graph.removeEdge).toEqual('function');
    });

    it('should remove an edge between two vertices', () => {
      const graph = new Graph();
      const vertexA = graph.addVertex('A');
      const vertexB = graph.addVertex('B');
      graph.addEdge(vertexA, vertexB);
      expect(vertexA.edges.length).toEqual(1);
      expect(vertexB.edges.length).toEqual(1);
      graph.removeEdge(vertexA, vertexB);
      expect(vertexA.edges.length).toEqual(0);
      expect(vertexB.edges.length).toEqual(0);
    });
  });
});
