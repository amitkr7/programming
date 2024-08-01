const someRecursive = (arr, func) => {
  if (!arr.length) return false;
  if (func(arr[0])) return true;
  return someRecursive(arr.slice(1), func);
};

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([2, 3, 4, 4], isOdd));
