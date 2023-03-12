/**
 * @param {number[]} nums
 * @return {number}
 */

// First solution
var numIdenticalPairs = function(nums) {
    let goodPairs = 0
    for(let i = 0 ;i <nums.length;i++){
        for(let j = i+1;j < nums.length ; j++){
            if(nums[i]==nums[j])
                goodPairs++
        }
    }
    return goodPairs
};

// Enhanced Solution
var numIdenticalPairs = function (nums) {
    const map = new Map()
    let count = 0

    for (const number of nums) {
        let result = map.get(number)
        if (result) count += result
        map.set(number, result?result + 1:1)
    }
    return count
};