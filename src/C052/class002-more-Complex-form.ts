// Original class
export class Animal {
  constructor(public color: string) {}
}

// Decorator that extends the class
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      // Modify the value of the color property
      this.color = this.invert(args[0]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// Applying the decorator
const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('roxo');
console.log(animal);
