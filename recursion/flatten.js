const flatten = (arr, temp = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], temp);
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
};
console.log(flatten([1, [2, 3], [4, 5], 6]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
