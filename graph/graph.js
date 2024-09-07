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

  depthFirstSearchRecursive(start) {
    let visited = {},
      result = [];
    let adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      for (let item of adjacencyList[vertex]) {
        if (!visited[item]) dfs(item);
      }
    }
    dfs(start);
    return result;
  }

  depthFirstSearchIterative(start) {
    let visited = {},
      result = [],
      stack = [start];
    let adjacencyList = this.adjacencyList;
    visited[start] = true;
    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      for (let item of adjacencyList[vertex]) {
        if (!visited[item]) {
          visited[item] = true;
          stack.push(item);
        }
      }
    }
    return result;
  }

  breacthFirstSearchIterative(start) {
    let visited = {},
      result = [],
      queue = [start];
    let adjacencyList = this.adjacencyList;
    visited[start] = true;
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      for (let item of adjacencyList[vertex]) {
        if (!visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
      }
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.depthFirstSearchRecursive('A'));
console.log(graph.depthFirstSearchIterative('A'));
console.log(graph.breacthFirstSearchIterative('A'));
