const Graph = require('../graphs/Graph');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  start.edges.forEach(edge => {
    const neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};
