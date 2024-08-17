class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.last;
      this.last = newNode;
      temp.next = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;
    const removedNode = this.first;
    if (this.first === this.last) this.last = null;
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.dequeue());
console.log(queue);
