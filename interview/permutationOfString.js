const permutationOfString = (str) => {
  const permutation = (str, left, right, result) => {
    const swap = (str, i, j) => {
      const arr = str.split('');
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return arr.join('');
    };

    if (left === right) {
      result.push(str);
    } else {
      for (let i = left; i <= right; i++) {
        str = swap(str, left, i);
        permutation(str, left + 1, right, result);
        str = swap(str, left, i);
      }
    }
  };
  const result = [];
  permutation(str, 0, str.length - 1, result);
  return result;
};
console.log(permutationOfString('ABC'));
