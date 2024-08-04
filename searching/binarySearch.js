const binarySearch = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) return mid;
    else if (arr[mid] < num) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
);
