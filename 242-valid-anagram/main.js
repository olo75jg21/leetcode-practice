// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function stringToCharsMap(str) {
  const charsMap = new Map()

  for (const char of str) {
    if (charsMap.has(char)) {
      const currentOccurancesAmount = charsMap.get(char)
      charsMap.set(char, currentOccurancesAmount + 1)
      continue
    }
    charsMap.set(char, 1)
  }

  return charsMap
}

function validAnagram(s, t) {
  if (s.length !== t.length) return false

  const sCharsMap = stringToCharsMap(s)
  const tCharsMap = stringToCharsMap(t)

  for (const [key, value] of sCharsMap) {
    if (sCharsMap.get(key) !== tCharsMap.get(key)) {
      return false
    }
  }

  return true
}

console.log(validAnagram('anagram', 'nagaram'))