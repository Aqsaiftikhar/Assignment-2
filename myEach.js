/---------------------myEach--------------------------------------------

/**
 * 
 * @param {Array} [array] 
 * @param {Function} iteratee 
 * 
 * myEach([1, 2], value => console.log(value))
 */
function myEach(array, iteratee) {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
