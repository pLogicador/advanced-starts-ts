// Type Aliases in TypeScript

// A type alias creates an alias or a "nickname" for a type.
// It's not an assignment of a value but rather a new name for an existing type.
// Type aliases are discarded during compilation and used only for static type checking.

// Example 1: Simple Type Aliases
type Age = number;  // 'Age' is now an alias for the 'number' type.
type Name = string;  // 'Name' is now an alias for the 'string' type.

// Example 2: Creating a Complex Type Alias
// 'Person' is now a custom object type, composed of 'Name', 'Age', and other properties.
// The `favoriteColor` field is optional due to the `?` symbol.
type Person = {
  name: Name;
  age: Age;
  salary: number;
  favoriteColor?: string; // Optional property
};

// Example 3: Union Types Using Type Aliases
// We can also combine multiple types using union types.
// 'favoriteColor' can be either an RGB color or a CMYK color.
type ColorRGB = 'RED' | 'GREEN' | 'BLUE';
type ColorCMYK = 'CYAN' | 'MAGENTA' | 'LIGHT-BLACK';
type FavoriteColor = ColorRGB | ColorCMYK;  // Union of RGB and CMYK colors.

// Example: Using Alias Types in Code
// Here, we create an instance of the 'Person' type.
const person: Person = {
  age: 30,
  name: 'Marry',
  salary: 1_000,  // Typescript allows underscores for better readability in large numbers.
};

// Example: Function that Modifies a Person's Favorite Color
// This function takes in a 'Person' and a color of type 'FavoriteColor', returning a new 'Person' object.
// Shallow Copy: The spread operator `{...person}` copies only the top-level properties of the object.
// This is called a shallow copy because nested objects or arrays are still referenced by the original object.
// Deep Copy: Would involve recursively copying all levels of an object, including nested properties and arrays.
export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return {...person, favoriteColor: color};  // Shallow copy using the spread operator.
}

// Example of Usage
console.log(setFavoriteColor(person, "BLUE")); // Updates favoriteColor to 'BLUE'.
console.log(person); // 'person' object remains unchanged due to the shallow copy.
