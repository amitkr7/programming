var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    max = 0;
  while (i < j) {
    let temp = Math.min(height[i], height[j]) * (j - i);
    if (max < temp) max = temp;
    if (height[i] < height[j]) i++;
    else j--;
  }
  return max;
};
const height = [1, 2, 7, 2, 4, 6, 9, 1];
console.log(maxArea(height));
