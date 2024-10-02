const sum = (a, b) => {
  let temp = {};
  return function () {
    let key = `${a}${b}`;
    if (temp[key]) {
      console.log('from cache');
      return temp[key];
    } else {
      console.log('Calculate');
      temp[key] = a + b;
      return a + b;
    }
  };
};

const res = sum(2, 3);
console.log(res());
console.log(res());

function outer(outervariable) {
  return function inner(innervariable) {
    console.log('Outer variable', outervariable);
    console.log('Inner variable', innervariable);
  };
}

const out = outer(6);
out(5);

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const count = counter();
console.log(count());
console.log(count());

const multiplier = (multiplier) => {
  return function (num) {
    return multiplier * num;
  };
};

const multiplyBy3 = multiplier(3);
const multiplyBy6 = multiplier(6);
console.log(multiplyBy3(5));
console.log(multiplyBy6(5));
