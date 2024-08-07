const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// console.log(merge([1, 2, 5, 7, 9], [3, 4, 6, 8, 10]));
console.log(mergeSort([1, 2, 5, 7, 9, 3, 4, 6, 8, 10, 12, 43, 23]));
