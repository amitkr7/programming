const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let totalCount = 0

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const numberOfWays = countConstruct(suffix, wordBank, memo)
      totalCount += numberOfWays
    }
  }
  memo[target] = totalCount
  return totalCount
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'sk', 'boar'])
)
console.log(
  countConstruct('enterapotentpot', [
    'a',
    'e',
    'p',
    'ent',
    'enter',
    'ot',
    'o',
    't',
  ])
)
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeeee',
    'eeeee',
    'eeeeeee',
    'eeeeeeeee',
  ])
)
