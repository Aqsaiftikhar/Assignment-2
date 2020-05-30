/**
 * 
 * @param {*} array 
 * @param {Function} predicate 
 * 
 * mySome([null, 0, 'yes', false], Boolean)
 */
function mySome(array, predicate) {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}