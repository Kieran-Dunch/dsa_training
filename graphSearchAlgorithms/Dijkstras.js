const djikstras = (graph, startingVertex) => {
  const distances = {};
  const previous = {};

  graph.vertices.forEach((vertex) => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });
  distances[startingVertex.data] = 0;

  return { distances, previous };
};
