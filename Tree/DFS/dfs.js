const {
  Node,
  BinarySearchTree,
} = require('../../binarySearchTree/binarySearchTree');

class DepthFirstSearch extends BinarySearchTree {
  preOrder() {
    let visted = [];
    function traverse(node) {
      visted.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visted;
  }
  postOrder() {
    let visted = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visted.push(node.value);
    }
    traverse(this.root);
    return visted;
  }
  inOrder() {
    let visted = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visted.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visted;
  }
}

const bst = new DepthFirstSearch();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.insert(14);
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.inOrder());
