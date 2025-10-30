console.log('3' == 3); // true
console.log('3' === 3); // false
console.log(NaN === NaN); // false
console.log(undefined === undefined); //true

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(undefined == false); // false
console.log(undefined === false); // false
console.log(undefined ? 'truthy' : 'falsy'); // falsy
