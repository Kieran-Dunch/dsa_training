const Graph = require('../graphs/Graph');
const Queue = require('../queues/Queue');


// breadthFirstTraversal uses a queue to keep track of visited vertices
// instead of recursion. It is a good algorithm for finding the shortest
// path between a starting vertex and the rest of the graph.
const breadthFirstTraversal = (startVertex, callback) => {
  const visitedVertices = [startVertex]
  const visitQueue = new Queue();
  visitQueue.enqueue(startVertex);

  while (!visitQueue.isEmpty()) {
    const currentVertex = visitQueue.dequeue();
    callback(currentVertex);

    currentVertex.edges.forEach((edge) => {
      const neighbor = edge.end;

      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    });
  }
};

module.exports = breadthFirstTraversal;
