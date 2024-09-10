# Keyof and Typeof

## **Keyof and Typeof in TypeScript**:

> In TypeScript, `keyof` and `typeof` are powerful operators used to work with types dynamically and safely.
> They help us get type information from existing values and objects and use that information to create type-safe functions.

### **`keyof` Operator**:

- The `keyof` operator is used to obtain the union of all keys of a given type.
- It allows us to dynamically access the properties of a type, ensuring type safety.

### **`typeof` Operator**:

- The `typeof` operator is used to obtain the type of a variable or object.
- It helps in creating types based on the structure of actual values.

**Examples**:

## 1. **Using `keyof` and `typeof` to Ensure Type Safety**:

> Consider an object `colorsObj` with predefined color properties.

```typescript
type ColorsObj = {
  vermelho: string;
  verde: string;
  azul: string;
};

const colorsObj: ColorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

// The function `translateColor` takes a color name and returns the corresponding color value.
// By specifying `'vermelho' | 'verde' | 'azul'` as a union type, we ensure only valid color names are used.
function translateColor(color: 'vermelho' | 'verde' | 'azul', colors: ColorsObj): string {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj)); // Output: red
console.log(translateColor('verde', colorsObj)); // Output: green
```

### Explanation

1. **`keyof` Operator**:

   - `keyof` is used to create a type that is a union of the keys of an object type. For example, `keyof ColorsObj` would give us a type `'vermelho' | 'verde' | 'azul'`.

2. **`typeof` Operator**:

   - `typeof` is used to infer the type of a variable or object. It allows us to use the structure of an existing value to define types.

3. **Combining `keyof` and `typeof`**:
   - By using `typeof` to infer the type of an object and `keyof` to get the keys of that type, you can create functions that are dynamically type-safe and maintainable.
