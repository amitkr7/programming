const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }
    if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    }
    if (i === arr1.length) {
      result.push(...arr2.slice(j));
      j++;
    }
    if (j === arr2.length) {
      result.push(...arr1.slice(i));
      i++;
    }
  }
  return result;
};

const merge2 = (arr1, arr2) => {
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

const merge3 = (arr1, arr2) => {
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
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

console.log(merge3([1, 2, 5, 7, 9], [3, 4, 6, 8, 10]));
