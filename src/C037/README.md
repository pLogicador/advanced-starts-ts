# Type Guard - Refining Types

## **Type Guards**:

> In TypeScript, Type Guards help refine the type of a variable within blocks of code, allowing more precise control over how different types are handled. They ensure that the code deals with the correct types, providing greater safety and avoiding runtime errors.

## **`add` Function**:

> This function performs an addition if both arguments are numbers. Otherwise, it concatenates the arguments as strings.

```typescript
export function add(a: unknown, b: unknown): number | string {
  // Checks if both arguments are numbers and returns their sum
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(5, 5)); // 10
console.log(add('ab', 'cd')); // 'abcd'
```

## **Type Guard with `instanceof`**:

> In this example, `instanceof` is used to check the type of an object. The `Student` class implements the `Person` interface, so `instanceof` is used to check if the object is an instance of the `Student` class.

```typescript
type Person = { name: string };
type Animal = { color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  // Checks if the object is an instance of Student
  if (obj instanceof Student) {
    console.log(obj.name);
  }
}

showName(new Student('John'));
```

## **Type Guard with `in`**:

> The `in` operator is used to check if a specific key exists in an object. This allows refining the type within the `if` block.

## **Literal Types**:

> Using literal types can help distinguish between different types of objects. Each type has an `isType` key to identify its specific type.

```typescript
type Person = { isType: 'person'; name: string };
type Animal = { isType: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  isType: 'person' = 'person';
  constructor(public name: string) {}
}

// Function using `switch` to check the type of the object
function showName(obj: PersonOrAnimal): void {
  switch (obj.isType) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('This is an animal: ' + obj.color);
      return;
  }
}

showName(new Student('John'));
showName({ isType: 'animal', color: 'white' });
```
