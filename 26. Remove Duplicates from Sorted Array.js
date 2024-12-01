var removeDuplicates = function(nums) {
    let k = 0;
    let map = new Map();
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i],1);
            nums[j] = nums[i];
            j++;
            k++;
        }
        else continue;
        
    }
    return k;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
