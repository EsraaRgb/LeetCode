/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = []
    ans = nums.concat(nums)
    return ans
};