class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentidx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentidx];
      if (element <= parent) break;
      this.values[idx] = parent;
      this.values[parentidx] = element;
      idx = parentidx;
    }
  }

  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(55);
heap.insert(1);
heap.insert(18);
heap.insert(27);
heap.insert(45);
heap.insert(12);
heap.insert(18);
heap.insert(199);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
