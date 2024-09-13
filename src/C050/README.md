# Tipos Utilitários em TypeScript

## 1. Introdução

O TypeScript oferece vários tipos utilitários que facilitam a manipulação e transformação de tipos. Esses tipos ajudam a definir e manipular objetos e suas propriedades de maneira mais eficiente e segura. Vamos explorar os principais tipos utilitários e como eles são utilizados:

## 2. Tipos Utilitários

### `Record<K, V>`

O tipo `Record` é usado para criar um tipo de objeto onde as chaves e valores são definidos. Por exemplo, você pode criar um objeto onde todas as chaves são strings e os valores podem ser de diferentes tipos.

```typescript
const obj1: Record<string, string | number> = {
  name: 'Pedro',
  lastName: 'Miranda',
  age: 25,
};

console.log(obj1);
```

> Neste exemplo, `Record<string, string | number>` define que `obj1` é um objeto cujas chaves são strings e os valores podem ser strings ou números.

### `Required<T>`

O tipo `Required` transforma todas as propriedades opcionais de um tipo em propriedades obrigatórias.

```typescript
type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

type PersonRequired = Required<PersonProtocol>;

const person: PersonRequired = {
  name: 'Pedro',
  lastName: 'Miranda',
  age: 25,
};

console.log(person);
```

> Neste exemplo, `PersonRequired` transforma todas as propriedades de `PersonProtocol` em obrigatórias.

### `Partial<T>`

O tipo `Partial` faz o oposto de Required, tornando todas as propriedades de um tipo opcionais.

```typescript
type PersonPartial = Partial<PersonRequired>;

const partialPerson: PersonPartial = {
  name: 'Pedro',
};

console.log(partialPerson);
```

> Aqui, `PersonPartial` faz com que todas as propriedades de `PersonRequired` sejam opcionais.

### `Readonly<T>`

O tipo `Readonly` faz com que todas as propriedades de um tipo sejam somente leitura (não podem ser modificadas).

```typescript
type PersonReadonly = Readonly<PersonRequired>;

const readonlyPerson: PersonReadonly = {
  name: 'Pedro',
  lastName: 'Miranda',
  age: 25,
};

// readonlyPerson.name = 'John'; // Erro: Cannot assign to 'name' because it is a read-only property.
```

### `Pick<T, K>`

O tipo `Pick` permite selecionar um subconjunto de propriedades de um tipo.

```typescript
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

const personPick: PersonPick = {
  name: 'Pedro',
  lastName: 'Miranda',
};

console.log(personPick);
```

> Aqui, `PersonPick` seleciona apenas as propriedades `name` e `lastName` de `PersonRequired`.

### `Exclude<T, U>`

O tipo `Exclude` remove os tipos de `U` de `T`.

```typescript
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>; // 'A' | 'B'
```

> `TypeExclude` resulta em tipos que estão em `ABC` mas não em `CDE`.

### `Extract<T, U>`

O tipo `Extract` extrai os tipos de T que são atribuíveis a U.

```typescript
type TypeExtract = Extract<ABC, CDE>; // 'C'
```

> `TypeExtract` resulta nos tipos que estão em `ABC` e também em `CDE`.

## 3. Exemplo de Transformação de Dados

Vamos demonstrar como usar tipos utilitários para mapear dados entre diferentes formatos de objetos:

Exemplo de Código:

```typescript
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  lastName: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'ajkshkaskan556854asas',
  name: 'Roger',
  age: 50,
  lastName: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('\n\nAPI:');
console.log(accountApi);
```

### Explicação:

1. **Objetivo**: Converter um objeto de formato MongoDB para um formato de API, alterando a chave `_id` para `id` e mantendo as demais propriedades.
2. **Tipo `AccountApi`**: Usa `Pick` e `Exclude` para criar um tipo que inclui todas as propriedades de `AccountMongo`, exceto `_id`, e adiciona uma nova propriedade `id`.
3. **Função `mapAccount`**: Mapeia e transforma o objeto `accountMongo` para o formato `AccountApi`, renomeando `_id` para `id`.

### Vantagens:

- **Imutabilidade**: Usar tipos utilitários como `Pick` e `Exclude` permite transformar tipos sem alterar os objetos originais.
- **Segurança de Tipo**: TypeScript garante que a transformação entre tipos seja segura e correta.
- **Flexibilidade**: Permite a adaptação de tipos para diferentes contextos, como conversão de formatos de dados.
