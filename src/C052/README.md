# Decoradores de Classe em TypeScript

## Introdução

Os **decoradores** em TypeScript são uma forma poderosa de adicionar funcionalidades ou modificar o comportamento de classes e seus membros. Eles permitem que você adicione lógica adicional a classes, métodos, propriedades ou parâmetros sem alterar diretamente o código da classe.

Um decorador é uma função que é chamada em momentos específicos do ciclo de vida de uma classe, como quando a classe é definida. Eles podem ser usados para:

- **Adicionar funcionalidades** a classes existentes.
- **Modificar** o comportamento das classes ou seus membros.
- **Registrar** informações sobre a classe.

### O Que São Decoradores?

Decoradores são funções que recebem um alvo (classe, método, propriedade ou parâmetro) e podem modificar ou estender seu comportamento. Em TypeScript, os decoradores são uma maneira de aplicar o padrão de design de **decorador**.

**Nota**: Decoradores são uma proposta experimental no JavaScript e são uma característica do TypeScript que pode não estar disponível em todos os ambientes JavaScript.

## Exemplo de Decoradores Sem TypeScript

Antes de mergulharmos em como os decoradores funcionam no TypeScript, vamos ver como a ideia de decoradores pode ser implementada em JavaScript puro.

### **Forma Clássica - Exemplo 1**

```typescript
// Classe original
export class Animal {
  constructor(public color: string) {}
}

// Decorador simples que adiciona um comportamento
function decorator(target: any): any {
  console.log('Aplicando decorador...');
  return target;
}

// Aplicando o decorador manualmente
const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('roxo');
console.log(animal);
```

> Neste exemplo, o decorador `decorator` simplesmente imprime uma mensagem e retorna a classe original sem modificações.

### **Forma Mais Complexa - Exemplo 2**

```typescript
// Classe original
export class Animal {
  constructor(public color: string) {}
}

// Decorador que estende a classe
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      // Modifica o valor da propriedade color
      this.color = this.invert(args[0]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// Aplicando o decorador
const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('roxo');
console.log(animal);
```

> Neste exemplo, o decorador `decorator` estende a classe `Animal` e altera o valor da propriedade `color` invertendo a string fornecida.

## Decoradores em TypeScript

Com o TypeScript, você pode usar a sintaxe `@decorator` para aplicar decoradores de forma mais intuitiva. A sintaxe simplifica o processo e torna o código mais limpo.

### Exemplo com Decorador TypeScript

```typescript
// Decorador que estende a classe
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = this.invert(args[0]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// Aplicando o decorador com a sintaxe @
@decorator
export class Animal {
  constructor(public color: string) {}
}

// Criando uma instância da classe decorada
const animal = new Animal('roxo');
console.log(animal);
```

### Explicação dos Decoradores

**1. Definição do Decorador:**

- O decorador é uma função que recebe um construtor de classe (`target`) e retorna uma nova classe que estende a original.
- No exemplo acima, o decorador modifica a classe `Animal` para inverter a cor fornecida.

**2. Sintaxe `@decorator`:**

- A sintaxe `@decorator` aplica o decorador diretamente à classe. Isso é equivalente a passar a classe para a função decoradora e atribuir o resultado de volta à classe.

**3. Não Cria uma Cópia:**

- O decorador não cria uma cópia da classe, mas modifica a classe original retornando uma nova definição estendida. Assim, qualquer instância da classe modificada terá as alterações aplicadas.

**4. Uso de Decoradores:**

- Decoradores são úteis para adicionar funcionalidades, como logging, validação ou transformação, sem modificar diretamente o código da classe original.
- São especialmente úteis em casos onde você não tem controle direto sobre a classe (por exemplo, bibliotecas de terceiros) ou quando você deseja aplicar a mesma lógica a várias classes.
