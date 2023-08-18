const Vertex = require('./Vertex');

describe('Vertex', () => {
  it('should have a data and edges property', () => {
    const vertex = new Vertex('A');
    expect(vertex.data).toBe('A');
    expect(vertex.edges).toEqual([]);
  });
});
