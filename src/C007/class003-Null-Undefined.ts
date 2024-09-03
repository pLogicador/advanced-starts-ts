// Example 3 - Handling Null with Conditional Logic
/*
  This function squares a number if the input is of type `number`.
  If the input is not a number, the function returns `null` to indicate an invalid calculation.
*/
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;  // If `x` is a number, return its square.
  return null;  // Return `null` if `x` is not a number.
}

const squareOfTwoNumber = squareOf(2);  // Valid input, should return 4
const squareOfTwoString = squareOf('2');  // Invalid input, should return null

/*
  Explanation:
  - The function `squareOf` accepts any type of input.
  - If the input is a number, it returns the square of the input.
  - If the input is not a number, it returns `null` to signify an invalid calculation.
*/

// Handling the result of the squareOf function
if (squareOfTwoNumber === null) {
  console.log('Invalid calculation');  // Output: Not triggered in this case
} else {
  console.log(squareOfTwoNumber);  // Output: 4
}

if (squareOfTwoString === null) {
  console.log('Invalid calculation');  // Output: Invalid calculation
} else {
  console.log(squareOfTwoString);  // Won't be triggered
}

/*
  Explanation:
  - We use a strict equality check (`=== null`) to determine if the result of `squareOf` is `null`.
  - If the result is `null`, we handle it as an invalid calculation.
  - If the result is not `null`, we know it must be a number, so we can safely log or use it.
*/
