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
});
