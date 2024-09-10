# Getter and Setter in TypeScript

> Por convenção, usamos um underscore (`_`) antes do nome de atributos privados
> que sustentam o valor real da propriedade. Isso evita o uso do mesmo nome para
> os métodos getter e setter, o que poderia causar erros de `stack overflow`.

```typescript
export class Person {
  // Definimos os atributos públicos e privados da classe no construtor.
  constructor(
    public firstName: string, // Atributo público
    public lastName: string, // Atributo público
    private age: number, // Atributo privado
    protected _cpf: string, // Atributo protegido (usado em getter/setter)
  ) {
    // Chamar o setter diretamente no construtor, permitindo que o valor
    // passe pelo método setter, se necessário. Isso garante que o valor inicial
    // seja validado ou formatado.
    this.cpf = _cpf; // Usa o setter para definir o valor do CPF
  }

  // Getter para o atributo _cpf
  // Os getters permitem que você "pegue" um valor de maneira semelhante ao acesso de uma propriedade.
  // Eles se comportam como atributos normais (acessados por `.`) e não como funções,
  // mas nos bastidores, eles são funções.
  get cpf(): string {
    console.log('Getter chamado');
    // Aqui, o getter remove qualquer caractere não numérico do CPF antes de retorná-lo.
    return this._cpf.replace(/\D/g, '');
  }

  // Setter para o atributo _cpf
  // Os setters permitem que você "defina" o valor de uma propriedade, mas podem incluir
  // lógica adicional, como validação ou transformação do dado.
  set cpf(value: string) {
    console.log('Setter chamado');
    // O setter pode ser usado para validar ou processar o valor antes de armazená-lo.
    // Aqui, ele simplesmente define o valor para a propriedade privada _cpf.
    this._cpf = value;
  }
}

// Exemplo de uso das classes

// Criamos um novo objeto da classe Person
const p1 = new Person('Roger', 'Silver', 56, '444.444.445-55');

// Acessamos o setter atribuindo um novo valor ao CPF
// Aqui, não estamos chamando uma função, mas apenas definindo a propriedade 'cpf'.
// O setter é chamado por trás dos panos.
p1.cpf = '555.555.555-55'; // Setter é chamado

// Quando acessamos a propriedade 'cpf', o getter é chamado automaticamente.
console.log(p1.cpf); // Getter é chamado e retorna '55555555555'

// Saída esperada:
// Setter chamado
// Getter chamado
// 55555555555
```
