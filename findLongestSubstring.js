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

// findLongestSubstring(''); // 0
// findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thisisawesome'); // 6
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// findLongestSubstring('longestsubstring'); // 8
// findLongestSubstring('thisishowwedoit'); // 6

const findLongestSubstring2 = (str) => {
  let start = 0;
  let longest = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  console.log('longest', longest);
  return longest;
};

findLongestSubstring2(''); // 0
findLongestSubstring2('rithmschool'); // 7
findLongestSubstring2('thisisawesome'); // 6
findLongestSubstring2('thecatinthehat'); // 7
findLongestSubstring2('bbbbbb'); // 1
findLongestSubstring2('longestsubstring'); // 8
findLongestSubstring2('thisishowwedoit'); // 6
