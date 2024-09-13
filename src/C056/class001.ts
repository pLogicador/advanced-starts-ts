// Method decorator (Decoradores de método)

function decorator(
  classPrototype: any,
  nameMethod: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);

  /*
  return {
    // writeble: false,
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
  */
}

export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
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

  @decorator
  myMethod(msg: string) {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

}

const p1 = new OnePerson('Pedro', 'Miranda', 55);
//p1.myMethod = () => 'HAHAHAHAHA';
const method = p1.myMethod('Hello, World!');
console.log(method);
