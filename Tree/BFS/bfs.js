const {
  Node,
  BinarySearchTree,
} = require('../../binarySearchTree/binarySearchTree');

class BreadthFirstSearch extends BinarySearchTree {
  BFS() {
    let node = this.root,
      queue = [],
      data = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const bst = new BreadthFirstSearch();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.insert(14);
console.log(bst.BFS());
