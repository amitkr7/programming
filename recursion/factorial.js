const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5));
console.log(factorial(12));
console.log(factorial(0));
