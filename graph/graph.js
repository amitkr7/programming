class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (item) => item !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (item) => item !== vertex1
    );
  }

  removeVertex(vertex) {
    const adjacentVertices = [...this.adjacencyList[vertex]];
    for (let i = 0; i < adjacentVertices.length; i++) {
      this.removeEdge(vertex, adjacentVertices[i]);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex('Test1');
graph.addVertex('Test2');
graph.addVertex('Test3');
graph.addEdge('Test2', 'Test3');
graph.addEdge('Test1', 'Test3');
graph.addEdge('Test1', 'Test2');

console.log(graph);
graph.removeVertex('Test1');
console.log(graph);
