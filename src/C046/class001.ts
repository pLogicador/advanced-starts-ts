// Constraints in Generics
// Generic function that constrains key K to be one of the keys of object O
type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

// Function that implements the GetKeyFn type
const getKey: GetKeyFn = (object, key) => object[key];

// Example object for testing
const animal = {
  color: 'Black',
  vaccines: ['vaccine 1', 'vaccine 2'],
  age: 10,
};

// Example of using the getKey function
const vaccines = getKey(animal, 'vaccines');  // Here K is inferred as 'vaccines'
const color = getKey(animal, 'color');  // Here K is inferred as 'color'

// Printing the results
console.log(vaccines, color, getKey(animal, 'age'));
