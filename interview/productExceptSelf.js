const productExceptSelf = (arr) => {
  let result = [];
  let start = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = start;
    start *= arr[i];
  }
  let reverse = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= reverse;
    reverse *= arr[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
