// test suite for DepthFirstTraversal.js

const Graph = require('../graphs/Graph');
const Vertex = require('../graphs/Vertex');

const depthFirstTraversal = require('./DepthFirstTraversal');

describe('depthFirstTraversal()', () => {
  it('should traverse the graph in depth first order', () => {
    const graph = new Graph();
    const vertices = [
      new Vertex('A'),
      new Vertex('B'),
      new Vertex('C'),
      new Vertex('D'),
      new Vertex('E'),
      new Vertex('F'),
      new Vertex('G'),
      new Vertex('H'),
      new Vertex('I')
    ];
    vertices.forEach(vertex => graph.addVertex(vertex));
    graph.addEdge(vertices[0], vertices[1]);
    graph.addEdge(vertices[0], vertices[2]);
    graph.addEdge(vertices[0], vertices[3]);
    graph.addEdge(vertices[1], vertices[4]);
    graph.addEdge(vertices[1], vertices[5]);
    graph.addEdge(vertices[2], vertices[6]);
    graph.addEdge(vertices[2], vertices[7]);
    graph.addEdge(vertices[3], vertices[8]);
    const callback = jest.fn();
    depthFirstTraversal(graph.vertices[0], callback);
    expect(callback).toHaveBeenCalledTimes(9);
    expect(callback).toHaveBeenNthCalledWith(1, graph.vertices[0]);
    expect(callback).toHaveBeenNthCalledWith(2, graph.vertices[1]);
    expect(callback).toHaveBeenNthCalledWith(3, graph.vertices[4]);
    expect(callback).toHaveBeenNthCalledWith(4, graph.vertices[5]);
    expect(callback).toHaveBeenNthCalledWith(5, graph.vertices[2]);
    expect(callback).toHaveBeenNthCalledWith(6, graph.vertices[6]);
    expect(callback).toHaveBeenNthCalledWith(7, graph.vertices[7]);
    expect(callback).toHaveBeenNthCalledWith(8, graph.vertices[3]);
    expect(callback).toHaveBeenNthCalledWith(9, graph.vertices[8]);
  });
});
