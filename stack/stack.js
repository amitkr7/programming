class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newItem = new Node(val);
    if (!this.size) {
      this.first = newItem;
      this.last = newItem;
    } else {
      let temp = this.first;
      this.first = newItem;
      newItem.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.size) return undefined;
    const temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp.value;
  }
}

const stack = new Stack();

// stack.push('Hello');
// stack.push('How');
// stack.push('are');
console.log(stack.push('you?'));
console.log(stack.pop());
