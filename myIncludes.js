/**
 * 
 * @param {Array} [array] 
 * @param {*} value 
 * 
 * 
 */
function myIncludes(array, value) {
    const length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
}