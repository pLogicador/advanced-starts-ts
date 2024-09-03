// Example with Better Type Declaration
function showMessage(msg: string): string { // Restricting to 'string' type for better type safety
  return msg;
}

console.log(showMessage('Hello')); // Valid use case
// console.log(showMessage([1, 2, 3])); // Will now trigger a type error
// console.log(showMessage(1 + 2)); // Will now trigger a type error
