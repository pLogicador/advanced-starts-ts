// Decorator Factories (Fábrica de decoradores)

// Factory decorator that receives parameters and returns a decorator
function invertColor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
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

// Passing parameters to decorators
@invertColor('value1', 'value2')
export class Animal {
  constructor(public color: string) {
    console.log('Im the class');
  }
}

const animal = new Animal('purple');
console.log(animal);
