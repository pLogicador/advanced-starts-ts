// Parameter decorator (Decoradores de parâmetro)
/*
function decorator(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
  return 'any thing';
}


export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  constructor(
    @decorator name: string,
    @decorator lastName: string,
    @decorator age: number
  ) {
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

  myMethod(@decorator msg: string) {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

}

const p1 = new OnePerson('Pedro', 'Miranda', 55);
const method = p1.myMethod('Hello, World!');
console.log(method);
*/
