// Enum type in TypeScript

/*
  - Enums are unordered data structures that allow us to group multiple options under a single type.
  - Enums are automatically numbered starting from 0, but we can customize the numbering or assign string values.
  - They help when we have multiple related options and want to organize them in a clean, manageable way.
*/

// Example 1: Numeric Enum (default behavior)
enum Colors {
  RED,     // 0 (default start)
  BLUE,    // 1
  YELLOW,  // 2
  GRAY = 'GRAY',  // Here we switch to a string value instead of a number
  GREEN = 4,      // Manually setting the number to 4 (skipping 3)
  PINK,    // 5 (automatically continues from GREEN, which is 4)
}

// Example 2: Merging Enums
/*
  - TypeScript allows us to merge enums with the same name.
  - This feature lets us split enums across multiple declarations, which will be merged into one final enum.
*/
enum Colors {
  BROWN = 'BROWN', // Adding a new string value
  ORANGE = 6,      // Continuing with numbers
  BLACK,           // 7 (follows ORANGE, which is 6)
}

// Accessing enum values
console.log(Colors);          // Logs the entire enum object
console.log(Colors.BLUE);     // 1
console.log(Colors[1]);       // "BLUE" - Reverse lookup by index
console.log(Colors.GRAY);     // "GRAY" - Accessing string value

// Function utilizing the Enum
export function changeTheColor(color: Colors): void {
  console.log(Colors[color]); // Prints the name of the color based on its enum value
}

// Calling the function
changeTheColor(Colors.BLACK); // Prints "BLACK"

// Uncomment the line below to see an error (TypeScript should prevent this).
// changeTheColor(123456); // TypeScript will now raise an error because 123456 is not a valid enum value.
