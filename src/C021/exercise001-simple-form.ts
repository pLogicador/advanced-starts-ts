// Define a class to represent an enterprise.
export class Enterprise {
  // The `name` property is public by default, so `public` is redundant here.
  // It is read-only, meaning it can only be set during initialization and cannot be changed later.
  readonly name: string;

  // The `employees` property is private, so it can only be accessed within the `Enterprise` class.
  // It is initialized as an empty array to store `Employee` objects.
  private readonly employees: Array<Employee> = [];

  // The `cnpj` and `ein` properties are protected. They can be accessed within the `Enterprise` class and by subclasses.
  protected readonly cnpj: string;
  protected readonly ein: string;

  // Constructor to initialize the properties when creating a new instance of `Enterprise`.
  constructor(name: string, cnpj: string, ein: string) {
    this.name = name;
    this.cnpj = cnpj;
    this.ein = ein;
  }

  // Method to add an `Employee` object to the `employees` array.
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  // Method to display all `Employee` objects in the `employees` array.
  showEmployees(): void {
    // Loop through each employee and log their details to the console.
    for (const e of this.employees) {
      console.log(e);
    }
  }
}

// Define a class to represent an employee.
export class Employee {
  // Constructor with shorthand property declaration:
  // The `name` property is public and read-only, meaning it can be accessed and read from outside the class but cannot be modified.
  // The `lastname` property is private, meaning it can only be accessed within the `Employee` class.
  constructor(
    public readonly name: string,
    private readonly lastname: string
  ) {}
}

// Example usage:
const enterprise1 = new Enterprise('Nintendo', '00.000.000/0000-00', 'XX-XXXXXXX');
const employee1 = new Employee('Roger', 'Mario');

// Add the `employee1` to the `enterprise1` employees list.
enterprise1.addEmployee(employee1);

// Display all employees of `enterprise1`.
enterprise1.showEmployees();
