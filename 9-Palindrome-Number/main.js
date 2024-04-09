// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversed = x.toString().split('').reverse().join('')

  return reversed.toString() === x.toString()
};

isPalindrome(122)