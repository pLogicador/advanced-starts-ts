# Decoradores Fábrica (Decorator Factories) em TypeScript

## O Que São Decoradores Fábrica?

Decoradores fábrica são uma forma avançada de criar decoradores em TypeScript. Eles permitem criar decoradores que podem receber parâmetros, oferecendo maior flexibilidade na configuração do comportamento do decorador.

## O Conceito de Closures

**Closures** (ou fechamentos) são um conceito fundamental em JavaScript e TypeScript. Um closure é uma função que captura e lembra o ambiente onde foi criada, incluindo variáveis e parâmetros externos.

### **Como isso se aplica a decoradores?**

Em uma fábrica de decoradores, você usa um closure para criar um decorador que pode acessar parâmetros externos (como configurações) mesmo após a função principal ter sido executada. A função externa recebe os parâmetros e retorna uma função decoradora que usará esses parâmetros para modificar o comportamento da classe.

## Exemplo de Decorador Fábrica

Vamos detalhar um exemplo que utiliza uma fábrica de decoradores para entender como isso funciona.

```typescript
// Decorador fábrica que recebe parâmetros e retorna um decorador
function invertColor(param1: string, param2: string) {
  // Closure: a função interna captura os parâmetros param1 e param2
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Eu sou o decorador e recebi:', target);

    // Retorna uma nova classe que estende a classe original
    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        // Modifica a propriedade color usando o método invert
        this.color = this.invert(args[0]);
      }

      // Método que utiliza os parâmetros fornecidos para inverter a string e adicionar os parâmetros
      invert(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

// Aplicando o decorador fábrica com parâmetros
@invertColor('valor1', 'valor2')
export class Animal {
  constructor(public color: string) {
    console.log('Eu sou a classe Animal');
  }
}

// Criando uma instância da classe decorada
const animal = new Animal('roxo');
console.log(animal);
```

### Explicação Detalhada

**1. Função de Fábrica `invertColor`:**

- Recebe dois parâmetros (`param1` e `param2`).
- Retorna uma função decoradora que será chamada pelo TypeScript quando a classe `Animal` for instanciada.

**2. Closure:**

- A função interna retornada pelo `invertColor` mantém uma referência aos parâmetros `param1` e `param2`. Isso permite que a classe decorada use esses valores quando criada.
- Esse comportamento é possível devido ao closure, que captura o contexto no qual a função foi criada.

**3. Função Decoradora:**

- Recebe a classe original (`target`) como argumento e retorna uma nova classe que estende a original.
- Modifica a propriedade `color` da classe `Animal` usando o método `invert`, que agora também inclui os parâmetros fornecidos.

**4. Aplicação do Decorador:**

- A sintaxe `@invertColor('valor1', 'valor2')` aplica o decorador fábrica à classe `Animal`.
- Quando uma instância da classe `Animal` é criada, a classe retornada pela função decoradora é usada.

**5. Instanciação da Classe:**

- A instância `animal` é criada com o valor `'roxo'`.
- O método `invert` altera esse valor, resultando em uma string invertida e adicionada aos parâmetros fornecidos.

### Vantagens

- **Flexibilidade**: Permite criar decoradores que recebem e utilizam parâmetros, oferecendo maior controle sobre como a classe é modificada.
- **Modularidade**: Mantém o código organizado e permite a reutilização de decoradores com diferentes configurações.
