# Composição de Decoradores em TypeScript

Decoradores são funções que podem ser aplicadas a classes, métodos, propriedades e parâmetros em TypeScript para adicionar comportamento adicional. Quando usamos mais de um decorador em uma única classe, é importante entender a ordem em que esses decoradores são aplicados e como isso afeta o comportamento final da classe.

### Exemplo de Composição de Decoradores

No exemplo abaixo, temos dois decoradores: `invertColor` e `anotherDecorator`. Vamos melhorar o exemplo e a explicação para clareza:

```typescript
type Constructor = {
  new (...args: any[]): any;
};

// Decorador Fábrica que inverte a cor e adiciona parâmetros
function invertColor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Decorator invertColor aplicado à classe:', target);

    // Retorna uma nova classe estendendo a classe original
    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = this.invert(args[0]);
      }

      // Método para inverter a string e adicionar os parâmetros fornecidos
      invert(value: string): string {
        return value.split('').reverse().join('') + ` ${param1} ${param2}`;
      }
    };
  };
}

// Decorador simples que apenas faz um log
function anotherDecorator(target: Constructor) {
  console.log('Decorator anotherDecorator aplicado à classe:', target);
}

// Aplicando os decoradores à classe
@anotherDecorator // Segundo decorador aplicado
@invertColor('value1', 'value2') // Primeiro decorador aplicado
export class Animal {
  constructor(public color: string) {
    console.log('Classe Animal instanciada');
  }
}

// Criando uma instância da classe decorada
const animal = new Animal('purple');
console.log(animal);
```

### Ordem dos Decoradores

- **Ordem de Aplicação**: Em TypeScript, os decoradores são aplicados de baixo para cima, ou seja, o decorador mais próximo da classe é aplicado primeiro.
- **Aplicação no Exemplo**: Primeiro, `invertColor` é aplicado, criando uma nova classe que estende a classe `Animal`. Em seguida, `anotherDecorator` é aplicado à classe resultante da aplicação do decorador `invertColor`.
