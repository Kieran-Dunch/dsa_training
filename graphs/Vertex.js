const Edge = require('./Edge');

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex) {
    if ((vertex instanceof Vertex)) {
      const newEdge = new Edge(this, vertex);
      this.edges.push(newEdge);
      return newEdge;
    } else {
      throw new Error('edge start and end must both be vertices');
    }
  }

  removeEdge(vertex) {
    this.edges = this.edges.filter(edge => edge.end !== vertex);
  }

  print() {
    const edgeList = this.edges.map(edge => edge.end.data).join(', ');
    console.log(`${this.data} --> ${edgeList}`);
  }
}

module.exports = Vertex;
