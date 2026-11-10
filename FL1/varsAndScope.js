const course = 'GIK339';
let studentsSY = 60;

{
  //console.log(course);
  let studentsSY = 65;
  var studentsGDW = 25;
  let x = 1;
}

//console.log(studentsSY);
//console.log(studentsGDW);
//console.log(x);
//course = 'GIK340'; // This will throw an error because course is a const
studentsSY = 70; // This will work because studentsSY is a let variable

console.log('3' == 3);
console.log('3' === 3);
console.log(typeof NaN);
console.log(undefined === undefined);

/* console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(undefined == false); // false
console.log(undefined === false); // false
console.log(0 ? 'truthy' : 'falsy'); // falsy */

console.log(greet('Kalle'));
function greet(name) {
  return 'hej ' + name;
}

const name = 'Thomas';
const greetArrow = (name) => {
  name = 'Kalle';
  return 'hej ' + name;
};
console.log(name);
const x = 1;

console.log(greetArrow('Mikaela'));
