# **Understanding Typing in TypeScript: Syntax and Practical Applications**

## **Structure**:

- The **type annotation** is placed after the `:` to indicate the data type.
- The **value assigned** to the variable, parameter, or property is placed after the equal sign (`=`).

```typescript
// 1. Variables
let variableName: Type = value;

// 2. Function Parameters and Return Types
function functionName(param1: Type1, param2: Type2): ReturnType {
  // function body
  return value;
}

// 3. Objects
let objectName: { key1: Type1; key2: Type2 } = {
  key1: value1,
  key2: value2,
};

// 4. Arrays
let arrayName: Type[] = [value1, value2];

// 5. Tuple (Fixed-Length Array with Specific Types)
let tupleName: [Type1, Type2] = [value1, value2];

// 6. Generics
function genericFunction<T>(param: T): T {
  return param;
}

// 7. Type Aliases (Custom Types)
type CustomType = {
  key1: Type1;
  key2: Type2;
};

let customObject: CustomType = {
  key1: value1,
  key2: value2,
};

// 8. Intersection Types (&)
type IntersectionType = Type1 & Type2;
let intersectionVariable: IntersectionType = {
  // properties from Type1 and Type2
};

// 9. Union Types (|)
let unionVariable: Type1 | Type2 = value;

// 10. Readonly and Constant Types
const constantName: Type = value;
let readonlyArray: readonly Type[] = [value1, value2];
```

</br>

## Explanation by Category

## The structure below shows the **generic syntax** for how type annotations work in different contexts in TypeScript. By understanding this hierarchy, you can see that TypeScript type annotations can be applied almost universally, from simple variables to complex types like generics, intersections, and unions.

### 1. **Variables**: Type annotations are placed after the colon `:` when declaring variables.

```typescript
let myName: string = 'Alice';
```

### 2. **Function Parameters and Return Types**: Each function parameter can have a type, and you can also specify the function's return type after the colon `:`.

```typescript
function multiply(x: number, y: number): number {
  return x * y;
}
```

### 3. **Objects**: You can declare the structure of objects with specific key-value pairs using type annotations.

```typescript
let person: { name: string; age: number } = {
  name: 'Alice',
  age: 25,
};
```

### 4. **Arrays**: You can specify the type of elements in an array with the `Type[]` or `Array<Type>` syntax.

```typescript
let numbers: number[] = [1, 2, 3];
```

### 5. **Tuples**: Tuples allow you to declare arrays with fixed types at specific indices.

```typescript
let tuple: [number, string] = [1, 'Alice'];
```

### 6. **Generics**: Generics allow for more flexible types that can adapt to different types passed in. This is useful for reusable components like functions and classes.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

### 7. **Type Aliases**: Type aliases create custom types using the type keyword for cleaner and reusable code.

```typescript
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };
```

### 8. **Intersection Types**: You can combine multiple types into one using the intersection operator `&`.

```typescript
type PersonWithAddress = Person & { address: string };
```

### 9. **Union Types**: Union types allow a variable to hold values of different types by separating them with the `|` symbol.

```typescript
let result: number | string = 'Success';
```

### 10. **Readonly and Constant Types**: `readonly` and `const` ensure that variables or array elements cannot be modified after declaration.

```typescript
const PI: number = 3.14;
let readonlyNumbers: readonly number[] = [1, 2, 3];
```

</br>
</br>
</br>

# TypeScript Function Typing

## In TypeScript, you can specify types for function parameters and return values to ensure safety and prevent errors.

### 1. **Regular Functions**

> For regular functions, parameter types are specified after the `:` and the return type is declared after the parameters, followed by `:`.

```typescript
function multiply(x: number, y: number): number {
  return x * y;
}
```

- **Parameters**: `x` and `y` are of type `number`.
- **Return**: The function returns a `number`.

### 2. Arrow Functions

> Arrow functions follow the same approach for typing. The return type is specified after the `=>`.

```typescript
const greet = (name: string): string => `Hello, ${name}`;
```

- **Parameter**: `name` is of type `string`.
- **Return**: The function returns a `string`.

### 3. Function Assigned to Variables

> You can type the function signature when assigning it to a variable. The signature is declared before the function expression.

```typescript
const sum: (x: number, y: number) => number = (x, y) => x + y;
```

- **Signature**: `(x: number, y: number) => number` indicates that `x` and `y` are `number` and the function returns a `number`.

### 4. Callback Functions

> When passing functions as callbacks, you can type the parameters and return type directly in the callback function.

```typescript
const numbers = [1, 2, 3, 4];
numbers.forEach((num: number) => {
  console.log(num * 2);
});
```

- **Parameter**: `num` is of type `number`.
- **Return**: The function returns `void`.
