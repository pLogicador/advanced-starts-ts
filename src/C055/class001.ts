// Composition of decorators
type Constructor = {
  new (...args: any[]): any;
}

function invertColor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Im the decorator and I received', target);

    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = this.invert(args[0]);
      }

      invert(value: string): string {
        return value.split('').reverse().join('') + ` ${param1} ${param2}`;
      }
    };
  }
}

function anotherDecorator(target: Constructor) {
  console.log('Im another decorator');
}

// Adding another decorator
@anotherDecorator // second called
@invertColor('value1', 'value2')  // first called
export class Animal {
  constructor(public color: string) {
    console.log('Im the class');
  }
}

const animal = new Animal('purple');
console.log(animal);
