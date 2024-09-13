// Generics with Interfaces and Type Alias
interface PersonProtocol1<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U;
}

// Using `interface PersonProtocol1`
const student1: PersonProtocol1 = {
  name: 'Pedro',
  lastName: 'Miranda',
  age: 21,
}

const student2: PersonProtocol1<number, number> = {
  name: 123,
  lastName: 109,
  age: 20,
}

// Using `type PersonProtocol2`
const student3: PersonProtocol2 = {
  name: 'Mario',
  lastName: 'Roger',
  age: 25,
}

console.log(student1);
console.log(student2);
console.log(student3);
