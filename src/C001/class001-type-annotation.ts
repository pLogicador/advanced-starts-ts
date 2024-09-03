// Type Annotations in TypeScript
/* eslint-disable */

// Basic Types (Here TypeScript infers the types automatically if not explicitly stated)
let name: string = 'Pedro'; // Accepts any string type: '', "", ``
let age: number = 30; // Accepts numbers: integers, floats, hexadecimals, binaries, octals (e.g., 10, 1.57, 0xf00d, 0b1010, 0o7744)
let isAdult: boolean = true; // Only 'true' or 'false'
let symbol: symbol = Symbol('any-symbol'); // Type 'symbol'
let bigNumber: bigint = 10n; // Type 'bigint' (large integers)

// Reference Types: Arrays and Objects

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3]; // Generic Array of numbers
let arrayOfStrings: Array<string> = ['a', 'b', 'c']; // Generic Array of strings
let arrayOfNumbersAlt: number[] = [1, 2, 3]; // Alternative syntax for number array
let arrayOfStringsAlt: string[] = ['a', 'b', 'c']; // Alternative syntax for string array

// Objects
let person: { name: string; age: number; isAdult?: boolean } = {
  // The '?' makes 'isAdult' optional
  name: 'Pedro',
  age: 30
};

// Functions

// Standard function type annotations: function (param: type) : returnType
function sum(x: number, y: number): number {
  return x + y;
}
const result = sum(2, 2); // TypeScript infers that 'result' is of type number automatically

// Alternative function annotation using an arrow function and explicit type alias
const sum2: (x: number, y: number) => number = (x, y) => x + y;

// Important: You typically write the code without explicit types and rely on TypeScript's inference.
// If TypeScript cannot infer the type, you manually annotate it.
