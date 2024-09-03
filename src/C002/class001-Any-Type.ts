// Any Type
/*
  - The `any` type allows any kind of value (numbers, strings, arrays, objects, etc.).
  - You can perform operations like addition or comparison without TypeScript raising errors.
  - However, it removes type safety, leading to potential runtime errors.

  Tip: Explicitly declare the types of function parameters wherever possible. Avoid allowing TypeScript to infer `any` type automatically, as it can be risky.
  - Use `any` only as a last resort when no other type fits the context.
*/

function showMessage(msg: any): any { // Ideally, avoid 'any' here and use specific types like `string` or `number`
  return msg;
}

console.log(showMessage([1, 2, 3])); // Avoid passing arrays if not intended
console.log(showMessage('Hello')); // Ideally, restrict to strings or specific types
console.log(showMessage(1 + 2)); // This works, but be cautious with implicit 'any'
