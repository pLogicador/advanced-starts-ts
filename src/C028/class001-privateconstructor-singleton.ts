// Singleton Pattern with Private Constructor and Static Method

/*
  **Problem:**
  In a system where you typically have a single database, it makes sense to maintain only one connection to it.
  Creating multiple connections to the same database could lead to problems like resource overuse,
  performance bottlenecks, and potential conflicts. Every time you call `new`, a new instance is created,
  which means multiple database connections.

  To solve this, we use the *Singleton* pattern. The Singleton ensures that a class has only one instance and
  provides a global point of access to it. In other words, when we request an instance of that class,
  it will either return the existing instance or create a new one if none exists.

  **Solution:**
  We implement the Singleton pattern by using a private constructor and a static method to control
  the creation and access to the class's single instance.
*/

// Database Class - Example using the Singleton Pattern
export class Database {
  // Static variable to store the single instance of the class
  private static database: Database;

  // Private constructor - prevents external instantiation of the class
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  // Method to simulate database connection
  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Static method to get or create the singleton instance of the class
  static getDatabase(host: string, user: string, password: string): Database {
    // Check if the instance already exists
    if (Database.database) {
      console.log('Returning existing instance');
      return Database.database;
    }
    // If not, create a new instance and store it in the static variable
    console.log('Creating new instance');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

// **Explanation**:
// - The constructor is private, meaning no one outside the class can create a new instance using `new`.
// - The `getDatabase` method is static and controls the creation and return of the single instance. It checks
//   if an instance already exists. If so, it returns the existing instance. Otherwise, it creates a new instance
//   and stores it for future use.

// **Usage Example:**
// First call creates a new instance
const db1 = Database.getDatabase('localhost', 'root', '123546');
db1.connect();

// Second call returns the existing instance
const db2 = Database.getDatabase('localhost', 'root', '123546');
db2.connect();

// Comparing both instances to verify if they are the same
console.log(db1 === db2); // true (db1 and db2 are the same instance)
