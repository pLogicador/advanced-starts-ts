// Using 'keys' as types - Helps keep code cleaner, and prevent code repetition at certain times
type Veiculo = {
  marca: string;
  ano: string;
}

// Mirroring with 'Veiculo' type
type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
}

const myCar: Car = {
  brand: 'ford',
  year: '1998',
  name: 'name car',
}

console.log(myCar);
