# Princípio de Inferência de Tipos com Generics em Classes

Quando trabalhamos com **Generics** em **classes**, a inferência de tipos é algo muito importante a ser entendido. O **TypeScript** é capaz de inferir os tipos automaticamente em diversas situações, como ao chamar uma função ou instanciar uma classe, desde que os valores estejam disponíveis no momento da chamada. No entanto, em situações onde os valores não estão imediatamente disponíveis (ou seja, serão fornecidos mais tarde), o TypeScript pode não ser capaz de inferir o tipo sozinho, e é necessário que você especifique o tipo explicitamente

## Explicação em Detalhes:

1. **Inferência de Tipo Automática**:

- Quando criamos uma classe ou função genérica e fornecemos valores no momento da instância ou chamada, o TypeScript pode inferir automaticamente o tipo com base nesses valores.
- Exemplo: Se você criar uma classe `Stack` genérica e instanciá-la com números, o TypeScript pode inferir que o tipo genérico é `number`.

2. **Quando a Inferência de Tipo Não Acontece**:

- No entanto, se os valores forem fornecidos posteriormente (não durante a inicialização), o TypeScript não consegue inferir qual tipo deve ser utilizado. Nesses casos, você precisará especificar explicitamente o tipo genérico para garantir que o TypeScript saiba como tratar esses valores futuros.

3. **Especificando Tipos Explicitamente**:

- Quando a inferência não é possível, é preciso fornecer o tipo manualmente na chamada ou instância. Isso garante que o TypeScript entenda corretamente qual será o tipo dos valores que você está manipulando.

## Exemplo: Estrutura de Dados Pilha (Stack) com Generics

> Uma **pilha** (**stack**) é uma estrutura de dados onde os elementos são inseridos e removidos de maneira **LIFO** (Last In, First Out), ou seja, o último elemento inserido é o primeiro a ser removido.

Aqui usamos **Generics** para permitir que nossa pilha funcione com qualquer tipo de dado.

### Exemplo:

```typescript
// Definindo uma classe genérica Stack
class Stack<T> {
  private items: T[] = [];

  // Método para adicionar um item à pilha
  push(item: T): void {
    this.items.push(item);
  }

  // Método para remover o item do topo da pilha
  pop(): T | undefined {
    return this.items.pop();
  }

  // Método para verificar o item do topo sem removê-lo
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Método para verificar se a pilha está vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Exemplo de inferência de tipos ao instanciar a classe com valores diretamente
const numberStack = new Stack<number>(); // Inferimos que T é number
numberStack.push(10); // Adiciona o número 10
numberStack.push(20); // Adiciona o número 20
console.log(numberStack.peek()); // Retorna 20 (item do topo)

// Exemplo sem inferência automática - fornecendo tipo explicitamente
const stringStack = new Stack<string>(); // Declaramos que T será string
stringStack.push('Hello'); // Adiciona a string 'Hello'
console.log(stringStack.pop()); // Remove e retorna 'Hello'

// Se tentarmos adicionar um número à pilha de strings, TypeScript nos alertará com erro
// stringStack.push(100); // Erro: '100' não é uma string
```

### Explicação Passo a Passo:

1. **Classe Genérica `Stack<T>`**:

- Definimos uma classe genérica `Stack<T>`, onde `T` é um tipo que será determinado na instância. Esse tipo pode ser qualquer tipo (número, string, objeto, etc.).

2. **Métodos da Pilha**:

- A classe `Stack` possui métodos comuns a uma pilha:
  - `push(item: T)` – Adiciona um item à pilha.
  - `pop()` – Remove e retorna o item do topo da pilha.
  - `peek()` – Retorna o item do topo sem removê-lo.
  - `isEmpty()` – Retorna um booleano indicando se a pilha está vazia.

3. **Inferência de Tipos**:

- Ao instanciar `Stack<number>`, o TypeScript infere que o tipo genérico `T` é `number`. Então, ao chamar `push()`, somente números podem ser adicionados à pilha.
- Ao instanciar `Stack<string>`, o TypeScript sabe que `T` é `string`. Apenas strings podem ser adicionadas.

4. **Especificação de Tipos Manual**:

- Se não fornecermos valores imediatamente ao instanciar a pilha, o TypeScript não será capaz de inferir o tipo automaticamente, então precisamos declarar explicitamente que tipo queremos usar (por exemplo, `Stack<string>`).

</br>

## Quando Usar Inferência e Quando Definir Explicitamente:

- **Inferência Automática**:

  - Use quando você estiver instanciando uma classe ou chamando uma função e os valores necessários já estão disponíveis, pois o TypeScript consegue inferir automaticamente os tipos.

- **Especificar Tipos Explicitamente**:

  - Quando os valores não estão imediatamente disponíveis, ou quando você precisa garantir que a função/classe genérica lida com um tipo específico, defina o tipo manualmente para evitar erros de tipos no futuro.
