// Declaration merging in interfaces

interface Person {
  name: string;
};

interface Person {
  readonly lastName: string;
}

interface Person {
  readonly addresses: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person1: Person = {
  name: 'William',
  lastName: 'Richard',
  addresses: ['Av. Br'],
  age: 53,
};

console.log(person1);
