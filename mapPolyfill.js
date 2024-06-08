Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const num = [1, 2, 3, 4, 5];

const res = num.myMap((item) => item * 3);
console.log(res);
