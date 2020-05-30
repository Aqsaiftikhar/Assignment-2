/**
 * 
 * @param {*} array 
 * @param {Function} predicate 
 * 
 * myEvery([true, 1, null, 'yes'], Boolean)
 */
function myEvery(array, predicate) {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (!predicate(array[index], index, array)) {
            return false;
        }
    }
    return true;
}