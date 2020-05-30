function baseIndexOf(array, value, fromIndex) {
    let index = fromIndex - 1;
    const { length } = array;

    while (++index < length) {
        if (array[index] === value) {
            return index;
        }
    }
    return -1;
}
/**
 * 
 * @param {Array} array 
 * @param {*} value 
 * @param {number} fromIndex 
 * 
 * myIndexOf([1, 2, 1, 2], 2)
 * myIndexOf([1, 2, 1, 2], 2, 2)
 */
function myIndexOf(array, value, fromIndex) {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    let index = fromIndex == null ? 0 : fromIndex;
    if (index < 0) {
        index = Math.max(length + index, 0);
    }
    return baseIndexOf(array, value, index);
}