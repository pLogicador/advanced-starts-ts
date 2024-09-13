// Property decorators (Decoradores de propriedades)
function decorator(classPrototype: any, name: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  }
}

export class OnePerson {
  @decorator
  name: string;
  @decorator
  lastName: string;
  age: number;

  constructor( name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }

  myMethod(msg: string) {
    return `${this.name} ${this.lastName}: ${msg}`;
  }
}

const p1 = new OnePerson('Pedro', 'Miranda', 55);
const method = p1.myMethod('Hello, World!');
console.log(method);
