/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let res = address.replaceAll('.',`[.]`)
    return res
};