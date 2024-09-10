# Padrão Singleton com Construtor Privado e Método Estático

## **Problema:**

> Imagine que você tenha um sistema que precisa se conectar a uma base de dados. Em uma situação normal, toda vez que você cria uma nova instância de uma classe de conexão com a base de dados, isso pode gerar múltiplas conexões. No entanto, em muitos casos, só faz sentido ter uma única conexão ativa com a base de dados, já que várias conexões podem causar problemas como bloqueios, gargalos de desempenho e inconsistências.

> Para resolver isso, usamos o padrão _Singleton_. O Singleton garante que uma classe tenha apenas uma única instância, e fornece um ponto de acesso global a essa instância. Ou seja, toda vez que tentamos criar uma nova instância da classe Singleton, ela retornará a mesma instância já criada anteriormente, evitando a criação de múltiplas conexões.

## **Solução:**

> Usamos um construtor privado e um método estático que controla a criação e o acesso à instância única da classe.

```typescript
// Classe Database - Exemplo com padrão Singleton
export class Database {
  // Variável estática para armazenar a instância única da classe
  private static database: Database;

  // Construtor privado - impede que a classe seja instanciada fora dela mesma
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  // Método que simula a conexão ao banco de dados
  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Método estático para obter a instância única da classe
  static getDatabase(host: string, user: string, password: string): Database {
    // Verifica se já existe uma instância da classe
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    // Caso não exista, cria uma nova instância e armazena na variável estática
    console.log('Criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}
```

## // **Explicação**:

- O construtor é privado, o que significa que ninguém fora da classe pode criar uma nova instância da classe `Database` usando `new`.
- O método `getDatabase` é estático e controla a criação e retorno da única instância da classe. Ele verifica se já existe uma instância.

> Se sim, retorna a mesma. Caso contrário, cria uma nova e a armazena para ser retornada nas chamadas subsequentes.

## **Exemplo de uso:**

```typescript
// Primeira chamada cria uma nova instância
const db1 = Database.getDatabase('localhost', 'root', '123546');
db1.connect();

// Segunda chamada retorna a instância existente
const db2 = Database.getDatabase('localhost', 'root', '123546');
db2.connect();

// Comparando as duas instâncias para verificar se são a mesma
console.log(db1 === db2); // true (db1 e db2 são a mesma instância)
```

### **Código completo:**

```typescript
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Returning existing instance');
      return Database.database;
    }
    console.log('Creating new instance');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

// **Usage Example:**
const db1 = Database.getDatabase('localhost', 'root', '123546');
db1.connect();
const db2 = Database.getDatabase('localhost', 'root', '123546');
db2.connect();
console.log(db1 === db2);
```
