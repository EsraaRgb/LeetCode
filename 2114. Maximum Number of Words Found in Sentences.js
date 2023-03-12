/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0
    for(let sentence of sentences){
        let count = 0
        for(let char of sentence){
            if(char == ' '){
                count++
            }
        }
        
        if(count+1 > max) max = count+1
    } 
    return max
    
};