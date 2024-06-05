function areThereDuplicates() {
  let collection = {};

  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}

const areThereDuplicates1 = (...args) => {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let current = 0;
  let next = 1;

  while (next < args.length) {
    if (args[current] === args[next]) return true;
    current++;
    next++;
  }
  return false;
};

const areThereDuplicates2 = (...args) => {
  return new Set(args).size !== args.length;
};

console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates2(1, 2, 3));
