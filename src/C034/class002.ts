// Implementing `Type Alias` in Classes
/*
type TypePerson = {
  name: string;
  lastName: string;
  fullName(): string;
};
*/

type TypeName = {
  name: string;
};

type TypeLastName = {
  lastName: string;
};

type TypeFullName = {
  fullName(): string;
};

export class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person('Roman', 'Miranda');
console.log(person.fullName());
