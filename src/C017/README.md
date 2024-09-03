# Asserções de Tipo em TypeScript

### As **asserções de tipo** são uma maneira de dizer ao compilador do TypeScript: "Eu sei mais sobre o tipo desse valor do que você." Isso é útil em situações onde o TypeScript pode não ter informações suficientes para inferir o tipo correto, mas você, como desenvolvedor, sabe qual o tipo esperado.

## Situações Onde Usamos Asserções de Tipo

> Existem várias situações em que as asserções de tipo são úteis:

### 1. **Verificação Condicional (Recomendado)**

> Nesse cenário, o TypeScript verifica se um elemento existe antes de aplicar operações sobre ele. Esta é a abordagem mais segura, pois evita erros em tempo de execução se o elemento não for encontrado.

```typescript
const body = document.querySelector('body');
if (body) {
  body.style.background = 'red';
}
```

- **Explicação**: O TypeScript não reclama porque você verificou que `body` existe antes de usá-lo.

### 2. **Asserção Non-Null (!) (Não Recomendado)**

> Aqui usamos uma **asserção non-null** (`!`), que diz ao TypeScript para assumir que o valor não é `null` nem `undefined`. Isso ignora a verificação de `null`, mas pode causar erros se o elemento não existir.

```typescript
const body2 = document.querySelector('body')!; // Non-null assertion
body2.style.background = 'red';
```

- **Explicação**: O TypeScript pula a verificação de null. Se o elemento body não existir, isso causará um erro em tempo de execução. Portanto, não é recomendado.

### 3. **Asserção de Tipo (Recomendado)**

> Aqui fazemos uma **asserção de tipo** usando `as`, o que diz ao TypeScript para tratar o valor como um tipo específico, neste caso, `HTMLBodyElement`. Esta abordagem é recomendada quando você tem certeza do tipo.

```typescript
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
```

- **Explicação**: Você sabe que `body` é um `HTMLBodyElement`, então você afirma isso com o tipo correto. Essa é a **forma recomendada** quando você tem certeza sobre o tipo do elemento.

</br>
</br>

# Asserção de Tipo com Elementos HTML

## O DOM fornece vários tipos de elementos HTML. Cada tipo tem propriedades e métodos específicos. Ao lidar com elementos do DOM, asserções de tipo são frequentemente usadas para acessar essas propriedades específicas.

Exemplo com `HTMLInputElement`

```typescript
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Texto de exemplo';
input.focus();
```

- **Explicação**: Aqui, afirmamos que o tipo é `HTMLInputElement` para acessar os métodos `value` e `focus` específicos dos elementos de entrada (input).

## Uso Incorreto de Asserções de Tipo (Não Recomendado)

### Você não pode simplesmente afirmar um tipo completamente não relacionado sem consequências. Por exemplo, tentar afirmar que um elemento `body` é um número é inválido e gera erros.

```typescript
const body4 = document.querySelector('body') as number;
body4.style.background = 'red'; // Erro: `number` não tem a propriedade `style`.
```

- **Explicação**: Isso não funciona porque um tipo `number` não tem a propriedade `style` como um `HTMLBodyElement`. O TypeScript não consegue conciliar essa incompatibilidade de tipos.

## Forçando Asserções de Tipo com `unknown` (Não Recomendado)

### Em situações onde você força uma asserção de tipo, pode usar `unknown` primeiro e depois afirmar outro tipo. Esta é uma manobra arriscada e geralmente **não é recomendada**, pois ignora a verificação de tipos do TypeScript.

```typescript
const body4 = document.querySelector('body') as unknown as number;
body4.style.background = 'red'; // Isso causará erros em tempo de execução!
```

- **Explicação**: Isso força o TypeScript a aceitar a asserção de tipo tratando temporariamente o valor como `unknown`. No entanto, isso ignora o sistema de tipos e pode causar erros em tempo de execução. Evite fazer isso a menos que seja absolutamente necessário.

</br>
</br>

# Hierarquia dos Elementos do DOM no TypeScript

## Ao trabalhar com elementos HTML no TypeScript, diferentes tipos representam diferentes tipos de elementos, cada um com suas próprias propriedades e métodos. Abaixo está uma hierarquia simplificada:

- `HTMLElement`: O tipo base para todos os elementos HTML. Possui propriedades como style, classList, innerHTML, etc.
  - HTMLBodyElement: Representa a tag `<body>`. Herda de `HTMLElement`.
  - `HTMLInputElement`: Representa um elemento `<input>`. Herda de `HTMLElement` e possui propriedades específicas como `value`, `checked`, etc.
  - `HTMLButtonElement`: Representa um elemento `<button>`. Herda de `HTMLElement`.
  - `HTMLDivElement`: Representa um elemento `<div>`. Herda de `HTMLElement`.
