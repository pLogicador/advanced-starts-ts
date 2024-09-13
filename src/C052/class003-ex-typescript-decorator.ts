// Decorator that extends the class
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = this.invert(args[0]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// Applying the decorator with the `@` syntax
@decorator
export class Animal {
  constructor(public color: string) {}
}

// Creating an instance of the decorated class
const animal = new Animal('roxo');
console.log(animal);
