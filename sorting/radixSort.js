const getDigit = (num, pos) => {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};

const mostDigits = (arr) => {
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(arr[i]));
  }
  return maxDigit;
};

const raidxSort = (arr) => {
  const maxDigitLength = mostDigits(arr);
  for (let k = 0; k < maxDigitLength; k++) {
    const arrayBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      arrayBucket[digit].push(arr[i]);
    }
    arr = [].concat(...arrayBucket);
  }
  return arr;
};
console.log(raidxSort([1, 4, 6, 9, 21, 8763, 88, 253, 11, 8, 12, 3456]));
