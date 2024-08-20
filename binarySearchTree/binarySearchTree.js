class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === value) return undefined;
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (current.value === value) return true;
      if (value > current.value) {
        if (!current.right) return false;
        current = current.right;
      } else {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      current = value > current.value ? current.right : current.left;
    }
    return false;
  }
}

const bst = new BinarySearchTree();
// bst.insert(12);
// bst.insert(10);
// bst.insert(13);
// bst.insert(11);
// bst.insert(9);
// bst.insert(8);
// bst.insert(14);
// console.log(bst.root.left);
// console.log(bst.root.right);
// console.log(bst.contains(11));

module.exports = {
  Node,
  BinarySearchTree,
};
