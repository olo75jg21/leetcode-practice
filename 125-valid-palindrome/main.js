/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const stringWithoutSpecialSymbols = removeNonAlphanumeric(s).toLowerCase()

    // const reversed = stringWithoutSpecialSymbols.split('').reverse().join('')

    // return reversed === stringWithoutSpecialSymbols

    // USING TWO POINTERS


    let left = 0
    let right = stringWithoutSpecialSymbols.length - 1

    while (left < right) {
        if (stringWithoutSpecialSymbols[left] !== stringWithoutSpecialSymbols[right]) {
            return false
        }

        left++
        right--
    }

    return true
};

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))