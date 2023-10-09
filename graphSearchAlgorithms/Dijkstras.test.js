// test file for Dijkstras.js

const dijkstras = require('./Dijkstras');

const Graph = require('../graphs/Graph');

const shortestPathBetween = (graph, startingVertex, targetVertex) => {
  const { distances, previous } = dijkstras(graph, startingVertex);

  const distance = distances[targetVertex.data];
  const path = [];
  let vertex = targetVertex;

  while (vertex) {
    path.unshift(vertex);
    vertex = previous[vertex.data];
  }

  return { distance: distance, path };
};



describe('dijkstras', () => {
  it('should be a function', () => {
    expect(typeof dijkstras).toEqual('function');
  });

  it('should return the shortest path between two vertices', () => {
    const graph = new Graph();
    const a = graph.addVertex('A');
    const b = graph.addVertex('B');
    const c = graph.addVertex('C');
    const d = graph.addVertex('D');

    graph.addEdge(a, b, 4);
    graph.addEdge(a, c, 3);
    graph.addEdge(b, d, 5);
    graph.addEdge(c, d, 10);

    expect(shortestPathBetween(graph, a, d)).toEqual({
      distance: 9,
      path: [a, b, d],
    });
  });
});
