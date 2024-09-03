// Example 2: Typing an Object for Flexibility
/*
  - To allow adding new properties, you can define them as optional.
  - Use "index signatures" when you don't know the exact property names but need to allow additional properties.
*/
const objectA2: {
  readonly keyA: string;
  keyB: string;
  keyC?: string; // Optional property
  [key: string]: unknown; // Index signature allowing any string property with unknown values
} = {
  keyA: 'value A',
  keyB: 'value B',
};

//objectA2.keyA = 'Other value'; // It can't be changed anymore
objectA2.keyD = 'New key created'; // Allowed because of the index signature

/*
  - When creating objects that need to be extensible, you have two options:
    1. Design the object with all known keys upfront.
    2. Make the object more flexible using an index signature for dynamic keys.
  - Use `Record<string, unknown>` for open objects when you are unsure of the keys. However, beware that it limits access to the object properties unless properly typed.
  - Use `readonly` to prevent modification of object properties after initial creation.
*/
