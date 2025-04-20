/**
 * https://leetcode.com/problems/group-anagrams/description/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = new Map()

    for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split('').sort().join('')

        if (result.has(sortedString)) {
            const currentValue = result.get(sortedString)
            result.set(sortedString, [...currentValue, strs[i]])
            continue
        }

        result.set(sortedString, [strs[i]])
    }

    return Array.from(result.values())
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])