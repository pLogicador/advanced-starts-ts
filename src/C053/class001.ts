// When the class decorator is called

// The class decorator only receives the class
function invertColor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Im the decorator and I received', target);

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

// The decorator is called when the class is created - We don't need to call the decorator explicitly
@invertColor
export class Animal {
  constructor(public color: string) {
    console.log('Im the class');
  }
}
// We will only see the `console.log` of the class after having used the decorator
console.log('\n\n');

// Creating an instance of the decorated class
const animal = new Animal('purple');
console.log(animal);
