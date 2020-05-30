
/**
 * 
 * @param {Array} array 
 * @param {Function} predicate
 *  
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * myFilter(users, ({ active }) => active)
 */
function myFilter(array, predicate) {
    let index = -1;
    let resIndex = 0;
    const length = array == null ? 0 : array.length;
    const result = [];

    while (++index < length) {
        const value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}