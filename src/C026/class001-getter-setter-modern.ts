// Getter and Setter in TypeScript - modern way to declare getter and setter

// By convention, we use an underscore (_) before the name of private attributes
// that hold the actual value of the property. This prevents using the same name
// for the getter and setter methods, which could cause stack overflow errors.

export class Person {
  // Define the public and private attributes of the class in the constructor.
  constructor(
    public firstName: string, // Public attribute
    public lastName: string,  // Public attribute
    private age: number,      // Private attribute
    protected _cpf: string,   // Protected attribute (used in getter/setter)
  ) {
    // Calling the setter directly in the constructor. This allows the value
    // to go through the setter if needed. It ensures the initial value is
    // validated or formatted if necessary.
    this.cpf = _cpf; // Uses the setter to set the initial value of the CPF
  }

  // Getter for the _cpf attribute
  // Getters allow you to "get" a value similarly to accessing a property.
  // They behave like regular attributes (accessed with `.`) but are functions
  // in the background.
  get cpf(): string {
    console.log("Getter called");
    // Here, the getter removes any non-numeric characters from the CPF before returning it.
    return this._cpf.replace(/\D/g, '');
  }

  // Setter for the _cpf attribute
  // Setters allow you to "set" the value of a property, and can include
  // additional logic, such as validation or data transformation.
  set cpf(value: string) {
    console.log("Setter called");
    // The setter can be used to validate or process the value before storing it.
    // Here, it simply assigns the value to the private _cpf property.
    this._cpf = value;
  }
}

// Example usage of the classes

// Creating a new object of the Person class
const p1 = new Person('Roger', 'Silver', 56, '444.444.445-55');

// Accessing the setter by assigning a new value to CPF
// Here, we are not calling a function but setting the 'cpf' property.
// The setter is automatically called behind the scenes.
p1.cpf = '555.555.555-55'; // Setter is called

// When accessing the 'cpf' property, the getter is called automatically.
console.log(p1.cpf); // Getter is called and returns '55555555555'

// Expected output:
// Setter called
// Getter called
// 55555555555
