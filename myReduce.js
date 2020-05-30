/**
 * 
 * @param {Array} [array] 
 * @param {Function} iteratee 
 * @param {*} [accumulator] The initial value.
 * @param {Boolean} [initAccum] Specify using the first element of `array` as the initial value.
 * 
 * myReduce([1, 2], (sum, n) => sum + n, 0)
 */
function myReduce(array, iteratee, accumulator, initAccum) {
    let index = -1;
    const length = array == null ? 0 : array.length;

    if (initAccum && length) {
        accumulator = array[++index];
    }
    while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
}