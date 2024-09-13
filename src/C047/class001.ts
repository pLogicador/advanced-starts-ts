// Generics with classes (stack data structure)
// Cases where he inferred
export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

const person1 = new Person('Miranda', 21);
const person2 = new Person(['Miranda'], 21);
const person3 = new Person(['Miranda'], {age: 21});
const person4 = new Person<string, number>('Miranda', 21);

// Cases where he does not infer
export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];;
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

//const stack = new Stack();  // this way he will not infer
const stack = new Stack<number>(); // Here he will infer why we defined the type
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
//const elRemoved = stack.pop();
//stack.showStack();

while(!stack.isEmpty()) {
  console.log(stack.pop());
}
