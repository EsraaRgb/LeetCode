/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let output = ''
    if (s === null || numRows <= 0) return ''
    else if (numRows == 1) return s
    else {
        let steps = 2 * numRows - 2
        for (let i = 0; i < numRows; i++) {
            for (let j = i; j < s.length; j += steps) {
                output += s[j]
                if (i != 0 && i != numRows - 1 && (j + steps - 2 * i) < s.length) {
                    output += s[j + steps - 2 * i]
                }
            }
        }
    }
    return output
};