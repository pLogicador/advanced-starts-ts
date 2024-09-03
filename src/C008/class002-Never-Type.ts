// Example 2 - Function with an infinite loop
export function infiniteLoop(): never {
  while (true) {  // Infinite loop that never terminates.
    console.log('Running infinitely...');
  }
}

// infiniteLoop(); // This function will run forever and never return.

 /*
   Explanation:
   - The `infiniteLoop` function is typed as `never` because it contains a loop that never breaks, which means it will never finish execution or return a value.
   - If you were to call this function, the program would keep running indefinitely.
 */

/*
  When to use `never`?
  - In error-handling functions that terminate execution and do not return.
  - In functions with infinite loops that never exit.
  - When ensuring that all possible code paths are accounted for (e.g., in `switch` or conditional checks).

  Note: In most cases, TypeScript will infer the `never` type automatically when it detects that a function or method never returns.
*/

