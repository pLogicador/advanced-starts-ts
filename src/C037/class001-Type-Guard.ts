// Type Guard - Refinamento de Tipos

/*
  **Type Guards**:
  Em TypeScript, os Type Guards ajudam a refinar o tipo de uma variável dentro de blocos de código, permitindo um controle mais
  preciso sobre como lidar com diferentes tipos. Eles ajudam a garantir que o código manipule os tipos corretos,
  oferecendo maior segurança e evitando erros em tempo de execução.

  **Função `add`**:
  Esta função realiza uma operação de adição se ambos os argumentos forem números. Caso contrário, ela concatena os argumentos
  como strings.
*/

export function add(a: unknown, b: unknown): number | string {
  // Verifica se ambos os argumentos são números e retorna a soma
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(5, 5)); // 10
console.log(add('ab', 'cd')); // 'abcd'

/*
  **Type Guard com `instanceof`**:
  Neste exemplo, estamos usando `instanceof` para verificar o tipo de um objeto. A classe `Student` implementa a interface
  `Person`, então `instanceof` é usado para verificar se o objeto é uma instância da classe `Student`.
*/
/*
type Person = { name: string };
type Animal = { color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  // Verifica se o objeto é uma instância de Student
  if (obj instanceof Student) {
    console.log(obj.name);
  }
}

showName(new Student('John'));
*/
/*
  **Type Guard com `in`**:
  Usamos o operador `in` para verificar se uma chave específica existe em um objeto. Isso permite refinar o tipo
  dentro do bloco `if`.

  **Tipos Literais**:
  Usar tipos literais pode ajudar a distinguir entre diferentes tipos de objetos. Cada tipo possui uma chave `isType`
  para identificar seu tipo específico.
*/

type Person = { isType: 'person', name: string };
type Animal = { isType: 'animal', color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  isType: "person" = 'person';
  constructor(public name: string) {}
}

// Função que utiliza `switch` para verificar o tipo do objeto
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
