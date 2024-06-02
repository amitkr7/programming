//Implement a function called sumZero, which accepts a sorted array, and find the combination where sum is zero . There can be negative numbers in the array, but it will always be sorted.

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum >= 1) right -= 1;
    else left += 1;
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 4, 10]));
