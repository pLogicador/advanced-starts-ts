// Classes in TypeScript - Models for Objects
// A class in TypeScript can act both as a type and a value. For example, the `Employee` class can be used to create objects and also specify the type for arrays or other structures.

export class Enterprise {
  // `name` is a public property: it can be read from outside the class but cannot be modified after initialization.
  public readonly name: string;

  // `employees` is a private property: it can only be accessed and modified within the `Enterprise` class. It's initialized directly at the declaration.
  private readonly employees: Array<Employee> = [];

  // `cnpj` and `ein` are protected properties: they can be accessed within the `Enterprise` class and by subclasses, but not from outside.
  protected readonly cnpj: string;
  protected readonly ein: string;

  // Constructor to initialize the properties when creating a new instance of `Enterprise`.
  constructor(name: string, cnpj: string, ein: string) {
    this.name = name;
    this.cnpj = cnpj;
    this.ein = ein;
  }
}

// The `Employee` class is currently empty. It can be extended later to include properties and methods relevant to employees.
export class Employee {

}

// Create a new instance of `Enterprise` with specified parameters.
const e1 = new Enterprise('Nintendo', '00.000.000/0000-00', 'XX-XXXXXXX');

// `name` can be accessed as it is a public property.
console.log(e1.name); // Outputs: Nintendo

// Output the entire `e1` object to see all its properties.
console.log(e1);
