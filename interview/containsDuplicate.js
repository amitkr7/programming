const containsDuplicate1 = (arr) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) return true;
    else temp.push(arr[i]);
  }
  return false;
};

console.log(containsDuplicate1([1, 2, 3, 1]));

const containsDuplicate2 = (arr) => {
  let temp = new Set(arr);

  return temp.size !== arr.length;
};

console.log(containsDuplicate2([1, 2, 3]));
