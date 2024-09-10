// Using typeof to Infer Object Types:
export const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

// Use `typeof` to infer the type of `colorsObj`
function translateColor(color: 'vermelho' | 'verde' | 'azul', colors: typeof colorsObj): string {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj)); // Output: red
console.log(translateColor('verde', colorsObj));   // Output: green

