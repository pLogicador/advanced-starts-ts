// Using 'this' as a return type for method chaining
/**
 * The `Calculator` class represents a simple calculator with basic arithmetic operations.
 * Methods return `this` to allow method chaining.
 */
export class Calculator {
  constructor(public inputNumber: number) {}

  /**
   * Adds a number to the current value and returns the instance.
   * @param n The number to add.
   * @returns The current instance for method chaining.
   */
  add(n: number): this {
    this.inputNumber += n;
    return this;
  }

  /**
   * Subtracts a number from the current value and returns the instance.
   * @param n The number to subtract.
   * @returns The current instance for method chaining.
   */
  sub(n: number): this {
    this.inputNumber -= n;
    return this;
  }

  /**
   * Divides the current value by a number and returns the instance.
   * @param n The number to divide by.
   * @returns The current instance for method chaining.
   */
  div(n: number): this {
    if (n === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.inputNumber /= n;
    return this;
  }

  /**
   * Multiplies the current value by a number and returns the instance.
   * @param n The number to multiply by.
   * @returns The current instance for method chaining.
   */
  mult(n: number): this {
    this.inputNumber *= n;
    return this;
  }
}

/**
 * The `SubCalculator` class extends `Calculator` to include additional functionality.
 */
export class SubCalculator extends Calculator {
  /**
   * Raises the current value to the power of a number and returns the instance.
   * @param n The exponent.
   * @returns The current instance for method chaining.
   */
  pow(n: number): this {
    this.inputNumber **= n;
    return this;
  }
}

// Example usage:
const calculator = new SubCalculator(10);

// Performing a series of calculations using method chaining.
calculator
  .add(5)   // 10 + 5 = 15
  .mult(2)  // 15 * 2 = 30
  .div(2)   // 30 / 2 = 15
  .sub(5)   // 15 - 5 = 10
  .pow(2);  // 10 ^ 2 = 100

console.log(calculator); // Output: SubCalculator { inputNumber: 100 }
