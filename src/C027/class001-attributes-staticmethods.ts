// `Static Attributes` and `Static Methods` in TypeScript

/*
  Static methods and attributes belong to the class itself rather than any instance of the class.
  This means you can access them without creating an object (instance) of the class.

  - **Static Methods**: These are methods that can be called directly on the class,
    not on an instance of the class. Static methods do not have access to instance properties
    (those defined in the constructor) and are used for functionality that pertains to the class as a whole.

  - **Instance Methods**: Regular methods that require an instance of the class to be invoked.
    These methods can access both instance properties and static properties of the class.
*/

export class Person {
  // Defining static attributes - these belong to the class, not to individual objects.
  static defaultAge = 0;
  static defaultCpf = '000.000.000-00';

  // Instance attributes - these belong to specific objects created from the class.
  constructor(
    public firstName: string, // Instance attribute
    public lastName: string,  // Instance attribute
    public age: number,       // Instance attribute
    public cpf: string,       // Instance attribute
  ) {}

  // Instance method - to access static attributes, you need to refer to the class directly, not via `this`.
  simpleMethod(): void {
    console.log(Person.defaultAge, Person.defaultCpf); // Accessing static properties within an instance method
  }

  // Static method - can be called without creating an instance of the class.
  static sayHi(): void {
    console.log("Hello! This is a static method!");
  }

  // Static method - Example of a factory method (a common design pattern)
  // Factory methods create instances of the class using default static values.
  static createPerson(firstName: string, lastName: string): Person {
    // Returning a new instance of Person with default age and CPF.
    return new Person(firstName, lastName, Person.defaultAge, Person.defaultCpf);
  }
}

// Usage example

// Creating an instance of the Person class
const p1 = new Person('Roger', 'Silver', 56, '444.444.445-55');

// Using the static factory method to create another instance
const p2 = Person.createPerson('Dani', 'Canses'); // Using the static method without instantiation

// Modifying an instance attribute
p1.cpf = '555.555.555-55';

// Accessing a static method directly from the class
Person.sayHi(); // This is called directly on the class, not on an instance

// Outputting the newly created instance
console.log(p2);

// Calling an instance method, which in turn accesses static properties of the class
p2.simpleMethod(); // Accesses static values even within an instance method

// Accessing static attributes from outside the class without instantiating it
// This is allowed, but use caution when exposing static attributes like this as it can be unsafe if mutable.
console.log(Person.defaultAge, Person.defaultCpf); // Accessing static attributes directly from the class
