/**
 * Created by Milos on 13.1.2015..
 */

var range = require("./lib/epsilon-range");

var epsilon = new range(3,5);

console.log(epsilon.apply(4));          // true
console.log(epsilon.apply(6));          // false
console.log(epsilon.apply(3));          // true
console.log(epsilon.apply(5));          // true

console.log('\n');

console.log(epsilon.applyStrict(4));    // true
console.log(epsilon.applyStrict(6));    // false
console.log(epsilon.applyStrict(3));    // false
console.log(epsilon.applyStrict(5));    // false

console.log('\n');

console.log(epsilon.applyStrict('A'));    // false
console.log(epsilon.applyStrict('B'));    // false
console.log(epsilon.applyStrict('C'));    // false
console.log(epsilon.applyStrict('D'));    // false