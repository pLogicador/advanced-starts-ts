# `Atributos` e `Métodos Estáticos` em TypeScript

### Métodos e atributos estáticos pertencem à classe em si, em vez de pertencerem a instâncias da classe. Isso significa que você pode acessá-los diretamente na classe, sem precisar criar um objeto (instância) da classe.

- **Métodos Estáticos**: São métodos que podem ser chamados diretamente na classe, sem a necessidade de instanciar um objeto da classe. Métodos estáticos não têm acesso aos atributos da instância (aqueles definidos no construtor) e são usados para funcionalidades que dizem respeito à classe como um todo.

- **Métodos de Instância**: São métodos normais que requerem uma instância da classe para serem invocados. Esses métodos podem acessar tanto os atributos de instância quanto os atributos estáticos da classe.

```typescript
export class Pessoa {
  // Definindo atributos estáticos - esses pertencem à classe e não a objetos individuais.
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  // Atributos de instância - pertencem a objetos específicos criados a partir da classe.
  constructor(
    public nome: string, // Atributo de instância
    public sobrenome: string, // Atributo de instância
    public idade: number, // Atributo de instância
    public cpf: string, // Atributo de instância
  ) {}

  // Método de instância - para acessar atributos estáticos dentro de um método da instância, deve-se referenciar a classe diretamente, não via `this`.
  metodoSimples(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // Acessando atributos estáticos dentro de um método de instância
  }

  // Método estático - pode ser chamado sem criar uma instância da classe.
  static dizerOi(): void {
    console.log('Olá! Este é um método estático!');
  }

  // Método estático - Exemplo de um método de fábrica (um padrão de design comum)
  // Métodos de fábrica criam instâncias da classe usando valores estáticos padrões.
  static criarPessoa(nome: string, sobrenome: string): Pessoa {
    // Retornando uma nova instância de Pessoa com idade e CPF padrão.
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

// Exemplo de uso

// Criando uma instância da classe Pessoa
const p1 = new Pessoa('Roger', 'Silver', 56, '444.444.445-55');

// Usando o método estático de fábrica para criar outra instância
const p2 = Pessoa.criarPessoa('Dani', 'Canses'); // Usando o método estático sem instanciar

// Modificando um atributo da instância
p1.cpf = '555.555.555-55';

// Acessando um método estático diretamente pela classe
Pessoa.dizerOi(); // Isso é chamado diretamente na classe, não na instância

// Exibindo a instância recém-criada
console.log(p2);

// Chamando um método de instância, que por sua vez acessa os atributos estáticos da classe
p2.metodoSimples(); // Acessa os valores estáticos dentro de um método de instância

// Acessando atributos estáticos diretamente pela classe, sem instanciar
// Isso é permitido, mas tenha cuidado ao expor atributos estáticos dessa forma, pois pode ser inseguro se forem mutáveis.
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // Acessando atributos estáticos diretamente na classe
```
