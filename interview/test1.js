function f(x) {
  x = 'y-' + x;
  return function (y) {
    y = 'x-' + y;
    return function (z) {
      return 'z-' + z;
    };
  };
}

const g = f('a')('b')('c');
console.log(g);
const arr = [1, 2, 3, 4, 5];
console.log(arr.splice());
console.log(arr);
console.log(arr.slice(1, -1));
console.log(arr);

// What is shadow Dom?
// Shadow.js
//custom hooks
//Difference between service worker and web worker
//What is the use of key in react?
//how javascript handle asynchronus task?
//how to optimize perfromance of react app?
//SOLID Priniciple
//higher order function /component
//difference between position absolute fixed and relative
//how redux and redux saga works
//what is generator function
//how would you design a frontend application
//what is callback
//React lifecycle with hooks
//When to use thunk and when to use saga
//what happens when we run npm start
//What is ECS fargate and how it works
//What happens when you hit npm start
