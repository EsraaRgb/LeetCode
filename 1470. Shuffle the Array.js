/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let i = 0
    let j = n
    let ans = []
    for (let k = 0; k < 2*n; k = k+2) {
        ans[k] = nums[i]
        ans[k+1]=nums[j]
        i++
        j++
    }
    return ans
};