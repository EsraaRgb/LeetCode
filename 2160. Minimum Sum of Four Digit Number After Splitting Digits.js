/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = [...num.toString()].sort()
    let x =  Number((num[0]+num[2]))
    let y = Number((num[1]+num[3]))
    
    return x+y
};