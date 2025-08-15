example1('hello', 'world');

function example1(param1, param2) {
  console.log('Funktion: example1, parametrar: ', param1, param2);
  return 'Returnerar strängen bestående av ' + param1 + ' och ' + param2;
}

console.log(example1('console', 'log'));

const example2 = function (param1, param2) {
  console.log('Funktion: example2, parametrar: ', param1, param2);
  return 'Returnerar strängen bestående av ' + param1 + ' och ' + param2;
};

example2('hello', 'fuction expression');

const example3 = (param1, param2) => {
  console.log('Funktion: example2, parametrar: ', param1, param2);
  return 'Returnerar strängen bestående av ' + param1 + ' och ' + param2;
};

example3('hello', 'arrow function');

const example4 = () => console.log('Arrowfunktion med bara en rad och utan parametrar');

example4();
