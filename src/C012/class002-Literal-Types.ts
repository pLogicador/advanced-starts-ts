// Literal types are most effective when combined with union types.
// In the function below, `color` can only be one of the specific string values: 'RED', 'BLUE', or 'GREEN'.
// This gives us type safety similar to an enum, ensuring that only these valid values can be used.
function changeColor(color: 'RED' | 'BLUE' | 'GREEN'): string {
  return color;
}

// The following is valid as 'BLUE' is one of the allowed literal types.
console.log(changeColor('BLUE'));

// The following would throw a TypeScript error because 'YELLOW' is not a valid literal type.
// console.log(changeColor('YELLOW'));

export default 1;
