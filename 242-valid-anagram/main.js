// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function getChars(s) {
  const charsMap = {}

  for (const char of s) {
    if (!charsMap[char]) {
      charsMap[char] = 1
    } else {
      charsMap[char] += 1
    }
  }

  return charsMap
}

var isAnagram = function (s, t) {
  const sMap = getChars(s)
  const tMap = getChars(t)

  const sKeys = Object.keys(sMap)
  const tKeys = Object.keys(tMap)

  if (sKeys.length !== tKeys.length) {
    return false
  }

  for (const key of sKeys) {
    console.log(sMap[key])
    console.log(tMap[key])
    if (sMap[key] !== tMap[key]) {
      return false
    }
  }

  return true
};

isAnagram("anagram", "nagaram")