const groupAnagrams = (arr) => {
  let sorted = arr.map((item) => item.split('').sort().join(''));
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [arr[i]];
    } else {
      map[sorted[i]].push(arr[i]);
    }
  }

  return Object.values(map);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
