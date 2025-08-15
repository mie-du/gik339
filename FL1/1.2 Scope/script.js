console.log(window);
console.log(window.Array);
console.log(Array);

var someVarWithVar = 1;
let someVarWithLet = 2;
const someVarWithConst = 3;

console.log(window);
console.log(someVarWithLet);

if (true) {
  var someVarWithVarInsideBlock = 4;
  let someVarWithLetInsideBlock = 5;
}

console.log(someVarWithVarInsideBlock);
//console.log(someVarWithLetInsideBlock);

console.log(varCreatedLaterWithVar);
console.log(varCreatedLaterWithLet);

var varCreatedLaterWithVar = 6;
let varCreatedLaterWithLet = 7;
