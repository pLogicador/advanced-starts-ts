// Getter and Setter - classic way of declaring getter and setter

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getCpf(): string {
    return this.cpf.replace(/\D/g,'');
  }

  setCpf(value: string): void {
    this.cpf = value;
  }

}

// Example usage of the classes
const p1 = new Person('Roger', 'Silver', 56, '444.444.445.55');
p1.setCpf('555.555.555.55');

// Output examples
console.log(p1.getCpf());
