// Null and Undefined in TypeScript
/*
  - `null`: Represents the intentional absence of any object value. It explicitly indicates that a variable is set to nothing.
  - `undefined`: Indicates that a variable has been declared but has not yet been assigned a value.

  In TypeScript, `null` and `undefined` are treated as distinct types. However, both represent the absence of a value, but in different contexts.
  Usage of `null` usually signifies an intentional absence, whereas `undefined` generally occurs when a variable is declared but not initialized.
*/

// Example 1 - Undefined Check
let x;
if (typeof x === 'undefined') x = 20;  // If `x` is undefined, assign 20 to it.
console.log(x * 20);  // Output: 400

/*
  Explanation:
  - Initially, `x` is declared but left undefined.
  - We check if `x` is `undefined` using `typeof`.
  - If true, we assign `20` to `x`. Now, `x * 20` gives `400`.
*/
