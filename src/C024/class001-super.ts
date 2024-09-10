// `super` - used to access the parent class (also known as the superclass) methods or constructor.

export class Person {
  // Defining attributes directly in the constructor for simplicity
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

// `Student` class inheriting from `Person`
export class Student extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    cpf: string,
    public classroom: string, // New property exclusive to Student
  ) {
    // Calling the parent class constructor (Person) with `super`
    super(firstName, lastName, age, cpf);
  }

  // Overriding the `getFullName` method from the parent class, but using `super` to retain the original logic
  getFullName(): string {
    console.log('Doing something BEFORE returning full name...');
    return super.getFullName(); // Calling the parent class method
  }
}

// `Client` class inheriting from `Person`
export class Client extends Person {}

// Example usage of the classes
const p1 = new Person('Roger', 'Silver', 56, '444.444.445.55');
const s1 = new Student('Maria', 'Miranda', 9, '666.555.444.88', '001');
const c1 = new Client('David', 'Leon', 25, '777.888.444.15');

// Output examples
console.log(p1.getFullName()); // Output: Roger Silver
console.log(s1.getFullName()); // Output: Doing something BEFORE \n Maria Miranda
console.log(s1); // Output: Student { firstName: 'Maria', lastName: 'Miranda', age: 9, cpf: '666.555.444.88', classroom: '001' }
