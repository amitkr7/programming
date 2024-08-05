const bubbleSort = (arr) => {
  let noswap;
  for (let i = arr.length; i > 1; i--) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noswap = false;
      }
    }
    if (noswap) break;
  }
  return arr;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSort([3, 2, 5, 8, 1, 4, 6, 9]));
