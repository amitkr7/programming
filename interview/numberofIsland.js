const numberOfIslands = (arr) => {
  let numOfIsland = 0;

  const traverse = (arr, row, col) => {
    if (
      row < 0 ||
      row > arr.length - 1 ||
      col < 0 ||
      col > arr[row].length - 1 ||
      arr[row][col] === '0'
    )
      return;

    arr[row][col] = '0';
    traverse(arr, row + 1, col);
    traverse(arr, row - 1, col);
    traverse(arr, row, col + 1);
    traverse(arr, row, col - 1);

    return 1;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '1') {
        numOfIsland += traverse(arr, i, j);
      }
    }
  }

  return numOfIsland;
};

console.log(
  numberOfIslands([
    ['1', '1', '0', '0'],
    ['1', '1', '1', '0'],
    ['0', '0', '1', '0'],
    ['0', '0', '0', '1'],
  ])
);
