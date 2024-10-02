const correctBracketPair = (num) => {
  let result = [];

  const backtrack = (current, open, close) => {
    if (current.length === num * 2) {
      result.push(current);
      return;
    }
    if (open < num) {
      backtrack(current + '(', open + 1, close);
    }

    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  };
  backtrack('', 0, 0);
  return result;
};

console.log(correctBracketPair(3));
