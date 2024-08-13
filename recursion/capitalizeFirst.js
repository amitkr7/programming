const capitalizeFirst = (arr, res = []) => {
  while (arr.length) {
    res.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return capitalizeFirst(arr.slice(1), res);
  }
  return res;
};

const capitalizeWord = (arr) => {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  const res = capitalizeWord(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
};

console.log(capitalizeFirst(['cat', 'dog']));
console.log(capitalizeWord(['cat', 'dog']));
