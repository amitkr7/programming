const validParenthesis = (input) => {
  const stack = [];
  const bracketPair = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let bracket of input) {
    if (['(', '{', '['].includes(bracket)) {
      stack.push(bracket);
    } else if ([')', '}', ']'].includes(bracket)) {
      if (stack.length === 0 || stack.pop() !== bracketPair[bracket]) {
        return false;
      }
    }
  }
  return true;
};

console.log(validParenthesis('{{{()}}}'));
console.log(validParenthesis('{{{(]{})}}}'));
console.log(validParenthesis('{{{([][])}}}'));
