const Edge = require('./Edge');
const Vertex = require('./Vertex');

class Graph {
  constructor() {
    this.vertices = [];
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

module.exports = Graph;
