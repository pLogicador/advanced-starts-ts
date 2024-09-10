// `Public` and `Private` Access Modifiers in TypeScript

/*
  - `public`: Um modificador padrão em TypeScript, onde a propriedade ou método é acessível em qualquer lugar.
              Isso inclui dentro da classe, fora da classe e em subclasses. Se você não especificar nenhum modificador,
              a propriedade ou método será `public` por padrão.

  - `private`: Propriedades ou métodos marcados como `private` só podem ser acessados dentro da própria classe.
               Eles não podem ser acessados fora da classe, nem mesmo em subclasses. No entanto,
               podem ser manipulados indiretamente por métodos `public` da mesma classe.

  - `protected`: é um modificador intermediário que permite acesso dentro da classe e em subclasses,
                 mas não fora da classe principal.
*/

// Define a class to represent an enterprise.
export class Enterprise {
  readonly name: string;
  private readonly employees: Array<Employee> = [];
  protected readonly cnpj: string;
  protected readonly ein: string;

  constructor(name: string, cnpj: string, ein: string) {
    this.name = name;
    this.cnpj = cnpj;
    this.ein = ein;
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

// Definition of the Employee class, which represents an employee.
export class Employee {
  /*
    - Atalho no construtor: Ao declarar as propriedades diretamente nos parâmetros do construtor
    com os modificadores de acesso (como `public` e `private`), essas propriedades são automaticamente
    criadas e inicializadas pela classe, sem a necessidade de declarar e inicializá-las manualmente no corpo da classe.

    - Exemplo: Ao usar `public readonly name: string` no construtor, a propriedade `name` é
    automaticamente criada como pública e inicializada com o valor passado na chamada do construtor.
  */
  constructor(
    public readonly name: string,
    private readonly lastname: string
  ) {}
}

// Usage example:
const enterprise1 = new Enterprise('Nintendo', '00.000.000/0000-00', 'XX-XXXXXXX');
const employee1 = new Employee('Roger', 'Mario');

// Adding the employee to the company.
enterprise1.addEmployee(employee1);

// Showing employees.
enterprise1.showEmployees();

// In this example:
// `enterprise1.name` can be accessed because `name` is public.
// `enterprise1.employees` cannot be accessed directly because `employees` is private.
// `employee1.lastname` cannot be accessed directly because `lastname` is private.
