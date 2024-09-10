// `this` in `functions` and `arrow functions`

// Explanation:
// This function uses an explicit type for `this` in TypeScript.
// TypeScript requires that when `this` is used inside a function, it must have a specified type.
// This prevents errors by ensuring TypeScript knows what `this` refers to.

export function displayInfo(this: Date, message: string): void {
  console.log("Date:", this);
  console.log("Message:", message);
}

// The `displayInfo` function cannot be called directly, because TypeScript doesn't know what `this` is.
// For example, the line below would throw an error:
// displayInfo('lorem');

// To execute the function correctly, we can use `call` or `apply`.

// Using `call`:
// `call` invokes the function, specifying `this` as the first argument, followed by the remaining function arguments.
displayInfo.call(new Date(), 'Call example');

// Using `apply`:
// `apply` is similar to `call`, but function arguments are passed as an array.
displayInfo.apply(new Date(), ['Apply example']);

// Differences between `call` and `apply`:
// - `call`: Passes the arguments individually after the `this`.
// - `apply`: Passes the arguments as an array after the `this`.

// Example with `call`:
displayInfo.call(new Date(), 'Message via call');

// Example with `apply`:
displayInfo.apply(new Date(), ['Message via apply']);
