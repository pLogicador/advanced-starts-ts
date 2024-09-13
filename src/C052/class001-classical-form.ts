// Class Decorators in TypeScript - Introduction

// Original class
export class Animal {
  constructor(public color: string) {}
}

// Simple decorator that adds a behavior
function decorator(target: any): any {
  console.log('Aplicando decorador...');
  return target;
}

// Applying the decorator manually
const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('roxo');
console.log(animal);
