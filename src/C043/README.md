# Generics - Introduction to Generic Types

**Generics** in TypeScript provide a way to create reusable code components that can work with multiple types, rather than being restricted to a specific type. In simple terms, generics allow us to pass types as parameters to a class, function, or interface, giving more flexibility to your code. This is useful when we don't know what specific type we will need in advance, but we want our code to be type-safe.

---

## Why Use Generics?

Without generics, you would either:

- Restrict yourself to a single type, losing flexibility.
- Use the `any` type, which sacrifices type safety, making it easier to introduce bugs.

Generics help in scenarios where:

1. **You want to write a function or class that works with multiple types.**
2. **You want to preserve type safety** (meaning TypeScript should still ensure that your code works correctly with those types).
3. **You want to avoid using `any`**, which would remove type-checking.

---

## Basic Syntax

Generics are defined using angle brackets (`<>`), and the convention is to use capital letters like `T` (Type) to represent a generic type.

### Example - Generic Function

```typescript
// Generic function to return the value passed to it
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>('Hello')); // Works with a string
console.log(identity<number>(42)); // Works with a number
```

In this example:

- `T` is the generic type parameter. It acts as a placeholder for the actual type that will be passed in when the function is called.
- You specify the type when calling the function: `identity<string>("Hello")`, where `T` becomes `string` in this case.

</br>

## Generic Functions

Generics work great when we need a function that can handle different types, but we want to maintain type safety.

### Example - Working with an Array:

```typescript
// A function that returns the first element of an array
function getFirstElement<T>(array: T[]): T {
  return array[0];
}

console.log(getFirstElement([1, 2, 3])); // Returns a number: 1
console.log(getFirstElement(['a', 'b', 'c'])); // Returns a string: 'a'
```

In this case, the function `getFirstElement` works with arrays of any type (`T[]`), and it returns the first element, maintaining the type of the array. The type `T` will be inferred based on the input array type.

</br>

## Generic Classes

Just like functions, you can use generics in classes to allow a class to work with various types.

### Example - Generic Class:

```typescript
// A class to handle collections of any type
class DataHolder<T> {
  private _data: T;

  constructor(value: T) {
    this._data = value;
  }

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }
}

// Creating instances with different types
const stringHolder = new DataHolder<string>('Hello');
console.log(stringHolder.data); // Output: 'Hello'

const numberHolder = new DataHolder<number>(123);
console.log(numberHolder.data); // Output: 123
```

In the above class:

- The class `DataHolder` uses a generic type `T` so it can hold any type of data.
- When you instantiate the class (`new DataHolder<string>("Hello")`), you define the type of `T` at runtime.

</br>

## Multiple Generics

You can also use multiple generic types in a function, class, or interface.

### Example - Function with Multiple Generics:

```typescript
// A function that pairs two values of different types
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const result = pair<string, number>('Hello', 42);
console.log(result); // Output: ['Hello', 42]
```

In this example:

- We use two generic types, `A` and `B`, which allow the function to accept two different types and return them as a tuple.

</br>

## Generic Constraints

Sometimes, you might want to limit the types that a generic can accept. This is where constraints come into play. Constraints ensure that the generic type must satisfy certain conditions (e.g., it must have specific properties or extend a certain class).

### Example - Generic with a Constraint:

```typescript
// Ensuring that T has a length property
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

logLength('Hello'); // Works: strings have length
logLength([1, 2, 3]); // Works: arrays have length
// logLength(42);         // Error: numbers don't have length
```

Here:

- `T extends { length: number }` means that the generic type `T` must have a `length` property (like strings and arrays).
- Trying to pass something without a `length` property (like a number) will result in a compile-time error.

</br>

# Using Generics in Real-Life Scenarios

Generics are highly useful in scenarios where you are creating utility functions or data structures that need to work with a variety of types, while still preserving type safety.

1. **Reusable Components**: Imagine building a function that works with both `number` and `string` arrays. You can write it once using generics and reuse it for different data types.

2. **Type-Safe APIs**: If you are creating an API that works with different entities (like users, posts, or comments), generics allow you to handle various types without losing type safety.

3. **Generic Data Structures**: Classes like `Array`, `Map`, `Set`, etc., are implemented using generics. This allows them to work with any data type, while still providing type safety.
