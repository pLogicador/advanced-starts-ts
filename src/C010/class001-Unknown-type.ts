// Unknown type in TypeScript

/*
  - The `unknown` type is similar to `any`, but it is safer because it enforces type checks before operations.
  - It is considered a step before `any` in the type hierarchy; essentially, `unknown` is the parent type of all types.
  - While you can assign any value to `unknown`, you cannot perform operations on it without explicit type checks.
*/

let x: unknown; // Declare a variable with the 'unknown' type

// Assign different values to the variable
x = 100;
x = 'lorem';
x = 500;
x = 10; // The value of 'x' is now 10

const y = 800; // Another constant number

/*
  - TypeScript will not allow you to perform operations directly on a variable of type 'unknown'.
  - You must first check the type of the variable before performing any actions on it.
*/

// Type-checking before performing operations
if (typeof x === 'number') {
  console.log(x + y); // This operation is allowed because we've confirmed 'x' is a number.
} else {
  console.log('x is not a number');
}
