// Inheritance with Typescript
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

// (polymorphism) generalizing/inheriting from the `Person` class
export class Student extends Person {
  // overriding concrete class method
  getFullName(): string {
    return `Im student my name is: ${this.firstName} ${this.lastName}`;
  }
}

export class Client extends Person {}

const p1 = new Person('Roger', 'Silver', 56, '444.444.445.55');
const a1 = new Student('Maria', 'Miranda', 9, '666.555.444.88');
const c1 = new Client('David', 'Leon', 25, '777.888.444.15');
console.log(p1.getFullName());
console.log(a1.getFullName());
console.log(c1);
