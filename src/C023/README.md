# 1. Herança ("É um" / "IS-A Relationship")

### - Definição: Herança descreve um relacionamento onde uma classe deriva de outra. A classe filha (subclasse) herda os atributos e métodos da classe pai (superclasse). Isso representa uma relação "é um".

### - Exemplo: Se Cachorro herda de Animal, podemos dizer que um Cachorro "é um" (IS-A) Animal.

### - Termos: Herança, IS-A, Superclasse, Subclasse.

# 2. Composição ("Tem um" / "HAS-A Relationship")

### - Definição: Composição descreve um relacionamento onde uma classe contém ou é composta por uma ou mais instâncias de outras classes. Este relacionamento é descrito como "tem um".

### - Exemplo: Uma classe Carro pode "ter um" (HAS-A) Motor. O Carro não é um Motor, mas ele depende de um motor para funcionar.

### - Termos: Composição, HAS-A, Parte de.

# 3. Agregação ("É parte de" / "PART-OF Relationship")

### - Definição: A agregação é semelhante à composição, mas implica uma relação mais fraca. Um objeto "é parte de" outro objeto, mas pode existir independentemente.

### - Exemplo: Uma Sala pode "ser parte de" (PART-OF) uma Casa, mas uma sala pode existir sem estar necessariamente dentro de uma casa específica.

### - Termos: Agregação, PART-OF.

# 4. Dependência ("Usa" / "Uses Relationship")

### - Definição: Dependência descreve um relacionamento temporário e transitório, onde uma classe usa outra classe como parte da sua funcionalidade, mas não mantém uma referência duradoura a ela. Esse relacionamento é frequentemente descrito como "usa".

### - Exemplo: Uma classe Controlador pode "usar" (Uses) uma classe Botão para disparar uma ação, mas o Controlador não é dependente do Botão permanentemente.

### - Termos: Dependência, Uses, Associação fraca.

# 5. Associação ("Relaciona-se com" / "Associates With")

### - Definição: Associação é um relacionamento geral entre duas classes, onde uma classe está associada a outra sem implicar necessariamente propriedade ou hierarquia.

### - Exemplo: Uma Pessoa pode estar associada a uma ContaBancaria. A Pessoa "relaciona-se com" (Associates With) uma ContaBancaria, mas uma conta bancária não faz parte de uma pessoa.

### - Termos: Associação, Relaciona-se com.

# 6. Polimorfismo (Substituição)

### - Definição: Polimorfismo permite que objetos de diferentes classes sejam tratados como objetos da mesma classe-base, especialmente em situações de herança. O polimorfismo é frequentemente descrito como uma habilidade de "substituição", onde um objeto pode ser substituído por outro de uma subclasse que compartilha a mesma interface ou classe-base.

### - Exemplo: Uma função que aceita um parâmetro do tipo Animal pode aceitar objetos de qualquer subclasse, como Cachorro ou Gato.

### - Termos: Polimorfismo, Substituição.

# 7. Realização ("Implementa" / "Implements Relationship")

### - Definição: Realização descreve a relação entre uma classe e uma interface. Uma classe "realiza" ou "implementa" uma interface ao fornecer a implementação dos métodos definidos pela interface.

### - Exemplo: Uma classe Carro pode "implementar" (Implements) a interface Veiculo, garantindo que ela siga o contrato exigido pela interface.

### - Termos: Realização, Implements.
