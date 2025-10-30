function greet(name) {
  return 'Hej ' + name;
}
const greetValue = greet('Mikaela');
console.log(greetValue);

const greetExpr = function (name) {
  return 'Hej ' + name;
};
const greetArrow = (name) => 'Hej ' + name;
console.log(greetExpr('Mikaela'));
console.log(greetArrow('Mikaela'));

const price = 100;
function withTax(price) {
  price = price * 1.25;
  return price;
}
console.log(withTax(100)); //125
console.log(price); // 100
