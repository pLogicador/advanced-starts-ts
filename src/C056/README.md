# Decoradores de Método em TypeScript

Os **decoradores de método** em TypeScript permitem modificar ou observar o comportamento de métodos em classes. Eles são uma ferramenta experimental e, por isso, há limitações e comportamentos que o TypeScript não consegue tipar adequadamente. A seguir, vamos explorar como funcionam os decoradores de método e seus parâmetros.

## Estrutura de um Decorador de Método

Um decorador de método é uma função que pode ser aplicada a métodos de uma classe e recebe três parâmetros principais:

### Parâmetros do Decorador

1. `classPrototype`: O protótipo da classe à qual o método pertence. Ele representa o objeto que contém as propriedades e métodos comuns a todas as instâncias da classe.

2. `nameMethod`: O nome do método que está sendo decorado como uma string.

3. `descriptor`: O descritor de propriedades (PropertyDescriptor) que contém informações sobre a configuração do método, como:

   - **writable**: Se a propriedade pode ser alterada.
   - **enumerable**: Se a propriedade aparece durante a iteração.
   - **configurable**: Se o descritor pode ser modificado posteriormente.

Se o decorador não retornar nada, ele apenas observa o comportamento do método. Se retornar um `PropertyDescriptor`, ele pode alterar a implementação do método.

## Exemplo de Decorador de Método

```typescript
// Decorador para um método de classe
function decorator(
  classPrototype: any, // Prototipo da classe
  nameMethod: string, // Nome do método decorado
  descriptor: PropertyDescriptor, // Descritor do método
): PropertyDescriptor | void {
  // Retorna um PropertyDescriptor ou void (se for apenas observação)
  console.log('Class Prototype:', classPrototype);
  console.log('Nome do Método:', nameMethod);
  console.log('Descritor:', descriptor);

  // Neste exemplo, apenas estamos observando o método, sem modificá-lo.
  // Se quiséssemos modificar o comportamento do método, poderíamos retornar um novo descritor:
  /*
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase(); // Exemplo: forçar o argumento a ser uppercase
    },
  };
  */
}
```

### Classe com Decorador de Método

Vamos aplicar o decorador a um método de uma classe chamada `OnePerson`. Esse decorador irá apenas observar o método sem alterá-lo, mas pode ser facilmente modificado para alterar o comportamento do método.

```typescript
// Classe OnePerson com propriedades e métodos decorados
export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  // Construtor da classe
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  // Propriedade "fullName" com getter e setter
  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g); // Quebra o valor por espaços
    const firstName = words.shift(); // Extrai o primeiro nome
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' '); // Junta o restante como o sobrenome
  }

  // Método decorado pelo decorador acima
  @decorator
  myMethod(msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }
}

// Instanciação da classe e execução do método decorado
const p1 = new OnePerson('Pedro', 'Miranda', 55);
const method = p1.myMethod('Hello, World!');
console.log(method);
```

### Explicações Detalhadas

- **Observação e Modificação de Métodos:**

  - O decorador pode ser usado para apenas observar um método (sem modificar seu comportamento) ou alterar o comportamento desse método, retornando um novo `PropertyDescriptor`.

- Parâmetros do Decorador:

  - `classPrototype`: Mostra o protótipo da classe (`OnePerson`), incluindo todos os métodos e propriedades.
  - `nameMethod`: Indica o nome do método que está sendo decorado, no caso, `myMethod`.
  - `descriptor`: Descreve as propriedades do método `myMethod`, como se ele é gravável (`writable`), enumerável (`enumerable`) ou configurável (`configurable`).

- Modificação do Método:

  - O decorador pode retornar um novo valor de `descriptor` com uma função modificada. No exemplo comentado, o método decorado retornaria a string em caixa alta se modificássemos o `value`.

## Cuidados com Tipagem

- **Perda de Tipagem:** Ao modificar o comportamento de um método diretamente em seu `PropertyDescriptor`, o TypeScript pode não conseguir tipar corretamente os novos comportamentos, resultando em perda de segurança de tipos. É por isso que decoradores são considerados uma funcionalidade experimental e devem ser usados com cautela.
