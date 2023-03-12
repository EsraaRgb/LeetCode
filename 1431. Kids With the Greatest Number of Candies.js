/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    let output = []
    const max = Math.max(...candies);
    for(let i = 0 ; i < candies.length; i++){
        candies[i]+extraCandies >= max ?output.push(true) : output.push(false)
    }
    return output
};