// Object Type
/*
  - Avoid using `object` as a type; it's too generic and doesn't provide proper type safety.
  - Avoid using object literals without explicitly defining their structure, as this restricts future extensions.
  - Be cautious with `Record<string, unknown>` because TypeScript won't allow you to access the contents without more type information, limiting its usefulness.
*/

// Example 1: Inferred Object Type
const objectA = {
  keyA: 'value A',
  keyB: 'value B',
};

objectA.keyA = 'Other value';
// objectA.keyC = 'New key'; // Error: Property 'keyC' does not exist on type '{ keyA: string; keyB: string; }'.
// TypeScript infers the object type, so you can't add new keys unless defined explicitly.
