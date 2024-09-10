// Implementing `Type Alias` in Classes
export abstract class TypePerson {
  protected abstract name: string;
  protected abstract lastName: string;
  protected abstract fullName(): string;
};

export class Person extends TypePerson {
  constructor(public name: string, public lastName: string) {
    super();
  }

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person('Roman', 'Miranda');
console.log(person.fullName());
