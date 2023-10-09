
const PriorityQueue = require("../heaps/PriorityQueue");

// Dijkstra's algorithm is an algorithm for finding the shortest paths between
// nodes in a graph, which may represent, for example, road networks. It was
// conceived by computer scientist Edsger W. Dijkstra in 1956 and published
// three years later.
const djikstras = (graph, startingVertex) => {
  // The algorithm works by keeping the shortest distance of vertex v from the
  // starting vertex in a map called distances. The algorithm also keeps track
  // of the previous vertex that leads to vertex v in a map called previous.
  // The algorithm starts by initializing all distances to infinity and all
  // previous values to null.
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  // It then adds the starting vertex to a priority
  // queue with a priority of 0. The priority queue is a min heap that
  // prioritizes vertices with the smallest distance from the starting vertex.
  queue.add(startingVertex, 0);

  // The algorithm then iterates through the priority queue until it is empty.
  // On each iteration, the algorithm dequeues the vertex with the smallest
  // distance from the starting vertex. It then iterates through the edges of
  // that vertex. For each edge, the algorithm calculates the distance of the
  // vertex at the end of the edge from the starting vertex.
  graph.vertices.forEach((vertex) => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });
  distances[startingVertex.data] = 0;

  while (!queue.isEmpty()) {
    const { vertex } = queue.popMin();

    vertex.edges.forEach((edge) => {
      let alternate = edge.weight + distances[vertex.data];
      let neighborValue = edge.end.data;

      // If the distance is smaller than the current distance of that vertex from
      // the starting vertex, the algorithm updates the distance of that vertex from
      // the starting vertex and the previous vertex that leads to that vertex. It
      // then adds the vertex to the priority queue with the new distance as its
      // priority.

      if (alternate < distances[neighborValue]) {
        distances[neighborValue] = alternate;
        previous[neighborValue] = vertex;
        queue.add({ vertex: edge.end, priority: distances[neighborValue] });
      }
    });
  }

  // The algorithm returns the distances and previous maps. The distances map
  // contains the shortest distance of every vertex from the starting vertex. The
  // previous map contains the previous vertex that leads to each vertex on the
  // shortest path from the starting vertex.
  return { distances, previous };
};


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

module.exports = djikstras;
