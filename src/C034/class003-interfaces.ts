// Interfaces in TypeScript
interface TypeName {
  name: string;
};

interface TypeLastName {
  lastName: string;
};

interface TypeFullName {
  fullName(): string;
};

type TypePerson = TypeName & TypeLastName & TypeFullName;
interface TypePerson2 extends TypeName, TypeLastName, TypeFullName {}

export class Person implements TypePerson2 {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const personObj: TypePerson2 = {
  fullName() {
    return `${this.name} ${this.lastName}`;
  },
  name: 'Laura',
  lastName: 'Silva',
}

const person = new Person('Roman', 'Miranda');
console.log(person.fullName());
console.log(personObj.fullName());
