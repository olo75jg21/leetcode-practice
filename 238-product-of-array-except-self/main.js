/**
 * https://leetcode.com/problems/product-of-array-except-self/description/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const output = new Array(nums.length).fill(1)

    let leftProduct = 1
    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProduct
        leftProduct *= nums[i]
    }

    let rightProduct = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return output
};

productExceptSelf([1, 2, 3, 4])