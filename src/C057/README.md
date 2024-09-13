# Parameter Decorator em TypeScript

## O que é?

O **Parameter Decorator** é uma função que pode ser aplicada aos parâmetros de um método dentro de uma classe. Ele permite interceptar informações sobre os parâmetros, como o índice e o nome, mas **não altera diretamente** o valor do parâmetro. Seu uso principal é para **anotação** ou **metaprogramação**, como a criação de frameworks ou sistemas de injeção de dependência.

## Onde utilizar?

É utilizado quando você deseja adicionar metadados ou realizar operações sobre os parâmetros de um método. Um exemplo comum é a criação de **injeção de dependências** ou frameworks que precisam de informações extras sobre os parâmetros de métodos.

## Como utilizar?

1. O decorador de parâmetro é uma função que recebe três argumentos:

   - `target`: O protótipo da classe ou o construtor estático.
   - `propertyKey`: O nome do método onde o parâmetro está.
   - `parameterIndex`: O índice do parâmetro na lista de parâmetros.

2. Ele é executado **na ordem em que os decoradores são aplicados**, mas não pode alterar o valor do parâmetro diretamente.

## Sintaxe

Aqui está a sintaxe básica de um `ParameterDecorator`:

```typescript
function logParameter(target: any, propertyKey: string | symbol, parameterIndex: number) {
  console.log(`Classe: ${target.constructor.name}, Método: ${String(propertyKey)}, Parâmetro index: ${parameterIndex}`);
}
```

## Exemplo de uso

Abaixo está um exemplo de uso de um **decorador de parâmetro** em TypeScript:

```typescript
class Person {
  greet(@logParameter message: string, @logParameter name: string): void {
    console.log(`${name} diz: ${message}`);
  }
}

function logParameter(target: any, propertyKey: string, parameterIndex: number): void {
  console.log(`Classe: ${target.constructor.name}`);
  console.log(`Método: ${propertyKey}`);
  console.log(`Índice do parâmetro: ${parameterIndex}`);
}

const person = new Person();
person.greet('Olá!', 'Pedro');
```

### O que acontece?

- O decorador `@logParameter` é aplicado nos parâmetros do método `greet`.
- Ele **não altera** o valor dos parâmetros, apenas loga informações como o nome da classe, do método e o índice dos parâmetros.

## Contexto de utilização

Você pode usar **decoradores de parâmetro** em:

- **Sistemas de injeção de dependência**: Onde o parâmetro pode ser um serviço que deve ser injetado automaticamente.
- **Frameworks e bibliotecas**: Que exigem metadados sobre os parâmetros para fornecer funcionalidades adicionais.
