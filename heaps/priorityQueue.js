class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentidx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentidx];
      if (element.priority >= parent.priority) break;
      this.values[idx] = parent;
      this.values[parentidx] = element;
      idx = parentidx;
    }
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(41, 1);
priorityQueue.enqueue(39, 2);
priorityQueue.enqueue(33, 3);
priorityQueue.enqueue(55, 4);
priorityQueue.enqueue(1, 5);
priorityQueue.enqueue(18, 7);
priorityQueue.enqueue(27, 6);
priorityQueue.enqueue(45, 2);
priorityQueue.enqueue(12, 1);
priorityQueue.enqueue(18, 1);
priorityQueue.enqueue(199, 4);
console.log(priorityQueue.values);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
