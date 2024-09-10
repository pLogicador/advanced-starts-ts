# Inheritance in TypeScript - Accessing the Superclass

### Overview of Classes and Inheritance

In TypeScript (and object-oriented programming in general), classes can inherit properties and methods from other classes. These are called **subclasses** and **superclasses**:

- **Superclass (Parent Class, Base Class)**: This is the class that is extended by another class. It sits higher in the hierarchy and provides base functionality.

- **Subclass (Child Class, Derived Class)**: This is the class that extends the superclass, inheriting its properties and methods while having the ability to add new functionality or override existing methods.

### Accessing the Superclass from a Subclass

The `super` keyword in TypeScript is used within a subclass to access properties and methods of the superclass. It is typically used in two ways:

1. To **call the constructor** of the superclass from the subclass constructor.
2. To **invoke a method** of the superclass inside an overridden method in the subclass.

### Example: Using `super` in TypeScript

```typescript
// Superclass (Parent Class)
export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Subclass (Child Class) extending Person
export class Student extends Person {
  // Adding a new property specific to Student
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    cpf: string,
    public classroom: string, // New property
  ) {
    // The `super` keyword calls the constructor of the superclass (Person)
    // You must call `super()` before accessing `this` in the constructor of a subclass
    super(firstName, lastName, age, cpf);
  }

  // Overriding the `getFullName` method from Person
  getFullName(): string {
    console.log('Doing something before calling the superclass method...');
    // Calling the method from the superclass using `super`
    return super.getFullName(); // This retains the original behavior of the method
  }
}

// Example usage
const student = new Student('Maria', 'Silva', 20, '555.666.777-88', 'Classroom 101');
console.log(student.getFullName()); // Output: Doing something before calling the superclass method... \n Maria Silva
```
