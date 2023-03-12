/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let flag = true
    for(let i = 2; i <=n-2; i++ ){
        let numBinary = n.toString(i)
        let temp = numBinary.split("").reverse().join()
        if (temp == numBinary ){
            flag= true
        }
        else return false
    }
    return flag
};