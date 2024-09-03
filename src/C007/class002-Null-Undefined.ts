// Example 2 - Optional Parameters and Undefined
/*
  This function creates a person object. The `lastName` parameter is optional.
  In TypeScript, optional parameters default to `undefined` if they are not provided.
*/
export function createPerson(
  firstName: string,
  lastName?: string  // Optional parameter
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,  // Could be undefined if not provided
  };
}

const person1 = createPerson('John', 'Doe');
const person2 = createPerson('Jane');  // No lastName provided

console.log(person1);  // Output: { firstName: 'John', lastName: 'Doe' }
console.log(person2);  // Output: { firstName: 'Jane', lastName: undefined }

/*
  Explanation:
  - If the `lastName` is not passed to the `createPerson` function, it remains `undefined`.
  - The `lastName` is optional and TypeScript correctly handles it as `undefined` when not provided.
*/
