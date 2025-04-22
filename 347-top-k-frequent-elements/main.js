/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const set = new Map()

    for (const num of nums) {
        if (set.has(num)) {
            const currentAmout = set.get(num)
            set.set(num, currentAmout + 1)
            continue
        }

        set.set(num, 1)
    }

    const setArray = Array.from(set)

    const sortedArray = setArray.sort((a, b) => b[1] - a[1])

    const keysArray = sortedArray.map(([val]) => val)

    const slicedResult = keysArray.slice(0, k)

    return slicedResult
};

topKFrequent([3, 0, 1, 0], 1)