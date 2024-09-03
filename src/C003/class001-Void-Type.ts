// Void Type
/*
  - The `void` type indicates that a function doesn't return any value.
  - Typically used for functions where the primary purpose is to perform actions like logging or updating values, not returning data.

  - The rest operator (`...args`) must be explicitly typed, since it will handle an array, and you need to define the type of the elements in the array.
*/

// Example 1: Function with void return type and rest parameters
function withoutReturn(...args: string[]): void { // The rest operator handles an array of strings
  console.log(args.join(' ')); // Joins the array into a single string with spaces and logs it
}

withoutReturn('Hello', 'World', '!', '...'); // Calls the function with multiple string arguments

// Example 2: Object method with void return type
const person = {
  firstName: 'Roger',
  lastName: 'Mario',

  // The `showName` method doesn't return any value, so it's typed as `void`
  showName(): void {
    console.log(`${this.firstName} ${this.lastName}`); // Logs the person's full name
  }
};

// Invokes the `showName` method
person.showName();

// Exporting the `person` object
export { person }; // This allows the object to be reused in other modules. When using module mode, exports enable code sharing between files.
