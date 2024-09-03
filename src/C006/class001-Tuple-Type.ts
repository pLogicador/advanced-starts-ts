// Tuple Type Example
/*
  A tuple in TypeScript is an array with a fixed number of elements, where each element has a specific type.
  - You can use tuples to represent data that has a strict structure, like a pair of values where the first is a number and the second is a string.

  Note: If you try to use methods like `push` or `pop` on a tuple, TypeScript might not catch type violations at compile time.
  To prevent such issues, it's a good idea to use `readonly` to make tuples immutable.
*/

// Example of a readonly tuple (non-mutable)
const clientData1: readonly [number, string] = [1, 'Lorem']; // A fixed-length tuple with readonly protection
const clientData2: [number, string, string] = [1, 'Lorem', 'Knuth']; // A tuple with 3 elements
const clientData3: [number, string, string?] = [1, 'Lorem']; // The third element is optional
const clientData4: [number, string, ...string[]] = [1, 'Lorem', 'Rome', 'Spider']; // Uses the rest operator for additional strings

/*
  - Trying to modify `clientData1` will throw an error because it is `readonly`.
  - Using `pop` or `push` on `clientData1` would not be detected by TypeScript due to the array's mutability methods,
    but it would result in unexpected behavior at runtime.
  - The solution is to define the tuple as `readonly`, preventing unintended mutations.

  Uncommenting the following lines would cause a compile-time error:
*/

// clientData1[0] = 5;   // Error: Cannot assign to '0' because it is a read-only property
// clientData1[1] = 'Magthy';  // Error: Cannot assign to '1' because it is a read-only property
// clientData1.pop();   // Error: Property 'pop' does not exist on type 'readonly [number, string]'

console.log(clientData1);  // Output: [1, 'Lorem']
console.log(clientData2);  // Output: [1, 'Lorem', 'Knuth']
console.log(clientData3);  // Output: [1, 'Lorem'] (third element is optional)
console.log(clientData4);  // Output: [1, 'Lorem', 'Rome', 'Spider'] (supports additional string elements with rest operator)
