# Restrições (Constraints) em Generics

No TypeScript, **Generics** podem ser restritos com `extends` para definir os tipos máximos que um genérico pode assumir. Isso é útil para garantir que um parâmetro genérico cumpra certos requisitos, como ser uma chave válida de um objeto.

Neste exemplo, usamos `keyof` para garantir que o parâmetro `K` seja uma chave de `O` (o objeto). A função genérica `getKey` extrai o valor de uma chave específica de um objeto, com segurança de tipos garantida.

## Explicação do Script

1. Inferecia de Tipo:


    - No TypeScript, a inferência de tipo faz com que o compilador detecte automaticamente os tipos dos argumentos fornecidos, sem a necessidade de especificá-los manualmente. No exemplo, o TypeScript infere o tipo de `O` e `K` com base nos valores fornecidos para o objeto e a chave.

2. Uso do `keyof`:


    - O `keyof` é usado para garantir que o tipo `K` seja uma das chaves do objeto `O`. Ou seja, `K` será restrito a um conjunto de strings que são as chaves de `O`. Isso evita a passagem de chaves inválidas.

3. Função Genérica:


    - A função `getKey` é uma função genérica que pode trabalhar com qualquer objeto e qualquer chave desse objeto. Ela recebe um objeto `O` e uma chave `K` (que deve ser uma chave válida de `O`), e retorna o valor correspondente a essa chave `O[K]`.
