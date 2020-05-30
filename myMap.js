/**
 * 
 * @param {Array} [array] 
 * @param {Function} iteratee
 * 
 *function square(n) {
 *   return n * n
 * }
 *
 * myMap([4, 8], square) 
 */
function myMap(array, iteratee) {
    let index = -1;
    const length = array == null ? 0 : array.length;
    const result = new Array(length);

    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}