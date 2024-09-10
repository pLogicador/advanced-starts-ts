// `protected`: is an intermediate modifier that allows access within the class and in subclasses, but not outside the main class.

// Define a class to represent an enterprise.
export class Enterprise {
  readonly name: string;
  protected readonly employees: Array<Employee> = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const e of this.employees) {
      console.log(e);
    }
  }
}

export class Nintendo extends Enterprise {
  constructor() {
    super('Nintendo', '00.000.000/0000-00');
  }

  removeEmployee(): Employee | null {
    const employee = this.employees.pop();
    if (employee) return employee;
    return null;
  }

}

// Definition of the Employee class, which represents an employee.
export class Employee {
  constructor(
    public readonly name: string,
    private readonly lastname: string
  ) {}
}

// Usage example:
const nintendo = new Nintendo();
const e1 = new Employee('Laura', 'Ravena');
const e2 = new Employee('Larissa', '...');
const e3 = new Employee('Romen', 'Mathias');

nintendo.addEmployee(e1);
nintendo.addEmployee(e2);
nintendo.addEmployee(e3);

const removedEmp = nintendo.removeEmployee();
console.log(`Removed: ${removedEmp ? removedEmp.name : 'No employee removed'}`);
console.log(nintendo);
