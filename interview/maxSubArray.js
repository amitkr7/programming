const maxSubArray = (arr) => {
  let maxSum = arr[0];
  let currentMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(currentMax + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currentMax);
  }
  return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
