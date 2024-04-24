// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let result = -1;
  for (let i = 0; i < haystack.length; i++) {
    let flag = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
      }
    }
    if (flag) {
      result = i
      break;
    }
  }

  return result
};

strStr('leetcode', 'leeto')