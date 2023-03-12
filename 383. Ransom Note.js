/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let mapObj = {}
    let count = 0
    for (let char of ransomNote) {
        if (!(mapObj[char])) {
            mapObj[char] = 0
        }
        mapObj[char]++
        count++
    }
    for (let char of magazine) {
        if (mapObj[char]>0) {
            mapObj[char]--
            count--
        }
    }
    if (count <= 0) {
        return true
    }
    else return false



};