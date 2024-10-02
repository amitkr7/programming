const findMin = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[right] < arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
};

console.log(findMin([4, 5, 6, 7, 1, 2]));
