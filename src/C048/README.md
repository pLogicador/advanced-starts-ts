# Generics com Interseção em TypeScript

## Introdução

Em TypeScript, **Generics** fornecem uma maneira poderosa de escrever código flexível e reutilizável ao permitir que tipos sejam parametrizados. Quando trabalhamos com tipos de interseção em combinação com generics, podemos mesclar os tipos de vários objetos sem precisar alterar os objetos originais. Isso é útil quando combinamos objetos ou dados de diferentes fontes em uma única entidade, mantendo a imutabilidade dos objetos originais.

## O que é um Tipo de Interseção?

Um **tipo de interseção** permite combinar múltiplos tipos em um só. Isso significa que o novo tipo terá todas as propriedades dos tipos combinados. Em TypeScript, tipos de interseção são representados usando o operador `&`.

Por exemplo:

```typescript
type A = { chave1: string };
type B = { chave2: string };

type C = A & B; // C terá tanto chave1 quanto chave2
```

## Explicação da Função: `joinObjects`

> A função `joinObjects` é uma função genérica que combina as propriedades de dois objetos e retorna um novo objeto com os tipos combinados. Ela não modifica os objetos originais, mas retorna um novo objeto que contém todas as propriedades de ambos.

**Código**:

```typescript
export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2); // Combina ambos os objetos
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const join = joinObjects(obj1, obj2);

console.log(join);
```

**Detalhamento**:

- **Tipos Genéricos `<O1, O2>`**: Representam os tipos dos objetos passados como parâmetros. A função é flexível e pode aceitar qualquer dois tipos de objeto.
- **Interseção `O1 & O2`**: O tipo de retorno é uma interseção dos dois tipos. Isso significa que o objeto retornado terá todas as propriedades de O1 e O2.
- **Imutabilidade**: A função usa `Object.assign` para combinar os objetos em um novo, sem modificar os objetos originais, mantendo a imutabilidade.

### Exemplo de Uso

Aqui está um exemplo de como você pode usar essa função:

```typescript
const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };

// Mescla os dois objetos em um novo
const objetoUnido = joinObjects(obj1, obj2);

console.log(objetoUnido);
// Saída: { chave1: 'valor1', chave2: 'valor2' }
```

### Caso de Uso:

> A função `joinObjects` é útil em cenários onde você precisa combinar dois objetos em um só, sem alterar os originais. Isso é comum em:

1. **Mesclagem de configurações**: Por exemplo, combinar configurações padrão com configurações fornecidas pelo usuário.
2. **Combinação de dados**: Mesclar várias fontes de dados em um único objeto, como combinar um perfil de usuário e preferências em um só objeto.

## Por que Usar Generics com Interseção?

- **Flexibilidade**: Você pode combinar quaisquer dois objetos sem precisar conhecer seus tipos exatos com antecedência.
- **Segurança de Tipo**: TypeScript garante que o objeto resultante terá todas as propriedades de ambos os objetos de entrada.
- **Imutabilidade**: Usando funções como `Object.assign`, você pode combinar objetos de forma segura, sem alterar os dados originais, preservando a integridade das entradas.
