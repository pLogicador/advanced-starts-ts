// Intersection Types in TypeScript

// Intersection types combine multiple types into one, meaning the resulting type must satisfy all of them.
// This is particularly useful when you want to enforce that an object contains properties from different sources.

// Example: Using Intersection Types to Create a More Structured Type
// Here, we define smaller, reusable types that each represent a specific set of properties.
type HasFirstName = { firstName: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

// Using Union Type would make the object "relaxed", meaning it could have any of the listed properties.
// Example:
// type Person = HasFirstName | HasLastName | HasAge;  // Union type allows any combination of the properties.

// Instead, by using Intersection Type (`&`), we enforce that the object must have all the properties from the intersected types.
type Person = HasFirstName & HasLastName & HasAge;  // Intersection type ensures that the object must have all these properties.

const person: Person = {
  firstName: 'Maicon',
  lastName: 'Jarvis',
  age: 25,
};

console.log(person);  // Output: { firstName: 'Maicon', lastName: 'Jarvis', age: 25 }

// This approach follows the Interface Segregation Principle, which suggests creating smaller, focused types
// that can be reused across different objects. Instead of having one large, rigid type, you break it down into
// smaller types that can be composed to form new, larger types when needed.

// Module mode
export { person };
