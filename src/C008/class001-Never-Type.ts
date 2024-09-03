// Never Type in TypeScript
/*
  - The `never` type indicates that a function or method never returns anything.
  - It is typically used in functions that either throw an error or have infinite loops.
  - It is also inferred when TypeScript recognizes that the function execution is halted and does not reach a return statement.

  When do we use the `never` type?
  - Error Handling: Functions that throw exceptions and terminate the program.
  - Infinite Loops: Functions that continuously run without terminating (like game loops).
  - Exhaustive checks: When ensuring that all possible cases have been handled in conditional structures (e.g., exhaustive switch statements).
*/

// Example 1 - Function that throws an error
export function createError(): never {
  throw new Error('Any error'); // The function throws an error and never returns.
}

// The following code will never execute, as the function always throws an error.
createError();  // This will terminate execution with an error and never returns a value.

/*
  Explanation:
  - The `createError` function is typed as `never` because it throws an error, meaning it halts the execution flow.
  - Any code after the call to `createError()` will not be executed because the program is terminated by the thrown error.
*/
