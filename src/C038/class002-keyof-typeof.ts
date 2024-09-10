// Using keyof to Dynamically Access Object Keys:
type ColorsObj = typeof colorsObj;  // Infer type from the object
type ColorsKeys = keyof ColorsObj; // Get union of keys ('vermelho' | 'verde' | 'azul')

export const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function translateColor(color: ColorsKeys, colors: ColorsObj): string {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj)); // Output: red
console.log(translateColor('verde', colorsObj));   // Output: green
