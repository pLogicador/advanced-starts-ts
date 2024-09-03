// Union Type Example in TypeScript

/*
  - Union types are used when a variable, parameter, or function return can be one of multiple types.
  - In this example, we allow `a` and `b` to be either `number` or `string`, meaning `addOrConcat` has to handle both cases.
  - TypeScript forces us to account for all possible types within the function, making sure no case is left out, which could result in `undefined` or incorrect behavior.
*/

function addOrConcat(a: number | string, b: number | string): number | string {
  // Handling the case where both 'a' and 'b' are numbers - we perform addition
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  // In all other cases, 'a' and 'b' are concatenated as strings
  return `${a} ${b}`;
}

// Test cases with different combinations of numbers and strings
console.log(addOrConcat(20, 10));         // 30 (numbers are added)
console.log(addOrConcat('hello', '0500')); // "hello 0500" (strings are concatenated)
console.log(addOrConcat(10, '22'));       // "10 22" (number and string concatenated as strings)
console.log(addOrConcat('22', 10));       // "22 10" (string and number concatenated as strings)
