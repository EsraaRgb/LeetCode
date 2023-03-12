/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let map = new Map()
    let sortedNums = [...nums].sort((a, b) => a - b)
    sortedNums.forEach((num, index) => {
        if (!map.has(num)) {
            map.set(num, index)
        }
    })
    return nums.map((num) => map.get(num))
}