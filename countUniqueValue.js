//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let uniqueCount = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] === arr[i + 1])) uniqueCount++;
  }
  return uniqueCount;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

//2 pointer approach
const countUniqueValues2 = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
console.log(
  countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 14, 14, 19])
);
