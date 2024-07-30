function power(num, exp) {
  if (exp === 0) return 1;
  return num * power(num, exp - 1);
}

console.log(power(3, 3));
console.log(power(2, 10));
