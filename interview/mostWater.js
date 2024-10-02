const mostWater = (arr) => {
  let max = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let total = Math.min(arr[left], arr[right]) * (right - left);
    if (total > max) max = total;
    if (arr[left] < arr[right]) left++;
    else right--;
  }
  return max;
};

console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
