/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numSet = new Set(nums);

    let longestSequence = 0
    numSet.forEach(value => {
        if (!numSet.has(value - 1)) {
            let currentNumber = value
            let currentStreak = 1

            while (numSet.has(currentNumber + 1)) {
                currentNumber++;
                currentStreak++;
            }

            longestSequence = Math.max(currentStreak, longestSequence)
        }
    })

    return longestSequence
};

longestConsecutive([100, 4, 200, 1, 3, 2])