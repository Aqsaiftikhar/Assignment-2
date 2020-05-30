function baseLastIndexOf(array, value, fromIndex) {
    let index = fromIndex + 1;
    while (index--) {
        if (array[index] === value) {
            return index;
        }
    }
    return index;
}

/**
 * 
 * @param {Array} array 
 * @param {*} value 
 * @param {number} fromIndex 
 * 
 * 
 * myUnshift([1, 2, 1, 2], 2)
 
 * Search from the `fromIndex`.
 * myUnshift([1, 2, 1, 2], 2, 2)
 */

function myUnshift(array, value, fromIndex) {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    let index = length;
    if (fromIndex !== undefined) {
        index = fromIndex;
        index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
    }
    return baseLastIndexOf(array, value, index);

}