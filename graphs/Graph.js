const Edge = require('./Edge');
const Vertex = require('./Vertex');

class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);
    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  addEdge(vertex1, vertex2) {
    if (vertex1 instanceof Vertex && vertex2 instanceof Vertex) {
      vertex1.addEdge(vertex2);
      vertex2.addEdge(vertex1);
    } else {
      throw new Error('edge start and end must both be vertices');
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      vertexTwo.removeEdge(vertexOne);
    } else {
      throw new Error('oops! Not a vertex.')
    }
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

module.exports = Graph;
