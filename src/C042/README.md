# Explanation

## 1. Nullish Coalescing Operator (`??`):

- Evaluates the left-hand side value.
- Returns the right-hand side value if the left-hand side is `null` or `undefined`.
- It is different from the logical OR operator (`||`) which also considers falsy values like `0`, `NaN`, `''`, etc.

## 2. Optional Chaining Operator (`?.`):

- Allows safe access to nested properties of an object.
- Returns `undefined` if the object is `null` or `undefined`, avoiding runtime errors.

### Usage Tips:

- Use the Nullish Coalescing Operator to provide default values when dealing with potential `null` or `undefined` values.
- Use Optional Chaining to safely access nested properties without risking errors from accessing properties on `null` or `undefined` objects.

</br>
</br>

### Explicação

1. **Nullish Coalescing Operator (`??`)**:

   - O operador Nullish Coalescing (`??`) verifica se o valor à esquerda é `null` ou `undefined`. Se for, ele retorna o valor à direita. Caso contrário, retorna o valor à esquerda.
   - É diferente do operador lógico OR (`||`), que também considera valores falsy como `0`, `NaN`, e `''`.

2. **Optional Chaining Operator (`?.`)**:
   - O operador Optional Chaining (`?.`) permite acessar propriedades de um objeto que pode ser `null` ou `undefined` de forma segura. Se o objeto for `null` ou `undefined`, a expressão retorna `undefined`, evitando erros em tempo de execução.

**Dicas de Uso**:

- Use o operador Nullish Coalescing para fornecer valores padrão quando lida com valores potencialmente `null` ou `undefined`.
- Use o operador Optional Chaining para acessar propriedades aninhadas de forma segura, sem arriscar erros ao acessar propriedades de objetos que podem ser `null` ou `undefined`.
