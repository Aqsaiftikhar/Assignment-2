function baseValues(object, props) {
    return props == null ? [] : props.map((key) => object[key]);
}
/**
 * 
 * @param {Object} object 
 * 
 *function Example() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Example.prototype.c = 3
 *
 * grabValues(new Example)
 * 
 *
 * grabValues('hello')
 * 
 */
function grabValues(object) {
    return object == null ? [] : baseValues(object, grabKeys(object));
} 