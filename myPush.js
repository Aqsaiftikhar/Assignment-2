function myPush(array, value) {
    const length = array == null ? 0 : array.length;
    array[length] = value;
    return array;

}
