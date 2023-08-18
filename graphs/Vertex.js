const Edge = require('./Edge');

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  print() {
    const edgeList = this.edges.map(edge => edge.end.data).join(', ');
    console.log(`${this.data} --> ${edgeList}`);
  }
}

module.exports = Vertex;
