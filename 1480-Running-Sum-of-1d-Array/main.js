// https://leetcode.com/problems/running-sum-of-1d-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = []

  for (let i = 1; i < nums.length + 1; i++) {
    const subArray = nums.slice(0, i);
    let sum = 0;
    for (let item of subArray) {
      sum += item;
    }
    result.push(sum);
  }

  return result;
};