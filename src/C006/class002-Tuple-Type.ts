// Readonly Arrays
/*
  Readonly arrays prevent any mutations (modifications) like `push`, `pop`, `shift`, etc.
  You can define readonly arrays in two ways:
  1. Using the `readonly` modifier before the array type (e.g., `readonly string[]`)
  2. Using `ReadonlyArray<T>` generic type (e.g., `ReadonlyArray<string>`)
*/

// Example 1: Defining a readonly array using the `readonly` keyword
const array1: readonly string[] = ['GG', 'BB', 'TAS'];  // Array is immutable

// Example 2: Defining a readonly array using `ReadonlyArray` generic
const array2: ReadonlyArray<string> = ['GG', 'BB', 'TAS'];  // Another way to define an immutable array

/*
  Attempts to modify these arrays will result in errors:
  Uncommenting the following lines would cause compile-time errors:
*/

// array1.push('New Value');   // Error: Property 'push' does not exist on type 'readonly string[]'
// array2[0] = 'New Value';    // Error: Index signature in type 'readonly string[]' only permits reading

console.log(array1);  // Output: ['GG', 'BB', 'TAS']
console.log(array2);  // Output: ['GG', 'BB', 'TAS']
