// Array Type
/*
  In TypeScript, there are two main syntaxes to define arrays:
  1. `Array<T>`: This is the generic form, where `T` is the type of elements in the array.
  2. `T[]`: This is a shorthand form where `T` represents the type of the elements, followed by `[]`.

  Both syntaxes are equivalent and can be used based on preference.
  - `Array<number>` is the same as `number[]`
  - `Array<string>` is the same as `string[]`
*/

// Function to multiply all arguments
export function multiplyArgs(...args: Array<number>): number {
  // The rest operator `...args` collects all passed numbers into an array.
  // The function then multiplies all values together using `reduce`.
  return args.reduce((ac, value) => ac * value, 1);
}

// Function to concatenate all string arguments
export function concatStrings(...args: string[]): string {
  // This function concatenates all string arguments into one string.
  return args.reduce((ac, value) => ac + value);
}

// Function to convert all string arguments to uppercase
export function toUpperCase(...args: string[]): string[] {
  // This function converts each string argument to uppercase using `map`.
  return args.map((value) => value.toUpperCase());
}

// Test cases and function usage
const resultProduct = multiplyArgs(1, 2, 3);  // Multiplies 1 * 2 * 3 = 6
const resultConcat = concatStrings('a', 'b', 'c');  // Concatenates 'a', 'b', 'c' = 'abc'
const upper = toUpperCase('z', 'x', 'w');  // Converts 'z', 'x', 'w' to ['Z', 'X', 'W']

// Output results to the console
console.log(resultProduct);  // Output: 6
console.log(resultConcat);   // Output: 'abc'
console.log(upper);          // Output: ['Z', 'X', 'W']
