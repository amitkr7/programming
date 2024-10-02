const reverseInteger = (number) => {
  let isNegative = number < 0;
  let num = Math.abs(number);
  let reverse = 0;
  while (num !== 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return isNegative ? -reverse : reverse;
};

console.log(reverseInteger(-123));
