const findLongestSubstring = (str) => {
  if (!str.length) return 0;

  const strArr = str.split('');
  let start = 0;
  let end = 0;
  let longestSub = 0;
  let tempArray = [];

  while (start < strArr.length) {
    if (!tempArray.includes(strArr[end]) && end < strArr.length) {
      tempArray.push(strArr[end]);
      end++;
    } else {
      longestSub = Math.max(longestSub, tempArray.length);
      tempArray = [];
      start++;
      end = start;
    }
  }
  console.log(longestSub);
  return longestSub;
};

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
