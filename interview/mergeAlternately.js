const mergeAlternately = (word1, word2) => {
  const maxlength = Math.max(word1.length, word2.length);
  let res = '';
  for (let i = 0; i < maxlength; i++) {
    if (word1[i]) res += word1[i];
    if (word2[i]) res += word2[i];
  }
  return res;
};

console.log(mergeAlternately('abcd', 'pq'));
