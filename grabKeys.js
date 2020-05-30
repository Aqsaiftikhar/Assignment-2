/**
 * 
 * @param {Object} object 
 * @returns {Array} Returns the array of property names.
 * function Example() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Example.prototype.c = 3
 *
 * grabKeys(Example Foo)
 * 
 *
 * grabKeys('hello')
 * 
 */

function arrayLikeKeys(values) {
    var keys = [];
    for (var value in values) {
        if (values.hasOwnProprty(value))
            keys.push(value);
    }
    return keys;
}

function grabKeys(object) {
    return Array.isArray(object) ?
        arrayLikeKeys(object) :
        Object.keys(Object(object));
}