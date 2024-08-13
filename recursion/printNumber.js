function printNumber(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumber(n - 1);
  console.log(n);
}

printNumber(5);
