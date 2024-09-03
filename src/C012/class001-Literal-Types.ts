// Literal Types in TypeScript

// Literal types allow you to use specific values as types, which restricts the variable to that exact value.
// By using `const`, TypeScript automatically infers the value as a literal type.

// Variable 'x' can hold any number type value.
let x = 10;
x = 0b1010; // Binary representation of the number 10.

// Variable 'y' is a constant, so it is inferred as a literal type with the value 10.
const y = 10; // Type of 'y' is literally 10 (it's a subtype of 'number').

// You can also explicitly define a literal type using `let`.
// This restricts the value of 'a' to exactly 100.
let a: 100 = 100; // 'a' can only be the literal value 100.

// In some cases, using `const` can be more appropriate than defining a literal type manually.
let b = 100 as const; // 'b' is now fixed to the literal value 100, equivalent to `const b = 100;`

// Example of using literal types in an object.
// In this case, `firstName` is locked to the literal value 'Marcos', and cannot be changed.
const person1 = {
  firstName: 'Marcos' as const, // Literal type 'Marcos'
  lastName: 'Miranda', // 'lastName' can still be changed because it's not marked as 'const'.
};

// Module mode -> using 'export' to avoid global scope issues (helps with module-based TypeScript projects)
export default 1;
