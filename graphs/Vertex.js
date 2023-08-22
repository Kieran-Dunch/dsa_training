const Edge = require('./Edge');

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex, weight) {
    // check if instance of vertex class
    if ((vertex instanceof Vertex)) {
      const newEdge = new Edge(this, vertex);
      this.edges.push(newEdge);
      return newEdge;
    } else {
      throw new Error('edge start and end must both be vertices');
    }
  }

  print() {
    const edgeList = this.edges.map(edge => edge.end.data).join(', ');
    console.log(`${this.data} --> ${edgeList}`);
  }
}

module.exports = Vertex;
