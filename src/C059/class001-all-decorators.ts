// All decorators

// Class constructor type
type Constructor = new (...args: any[]) => any;

// Classes
function classDecorator(constructor: Constructor): any {
  // Call on class creation
  console.log('CLASS');
  console.log(constructor);
  console.log('##########\n');
}

// Normal instance method (normal)
function methodDecorator(
  classPrototype: any,
  nameMethod: string,
  propertyDescriptor: PropertyDescriptor
): any {
  // Called when creating the method (no need to call the method)
  console.log('NORMAL METHOD');
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(propertyDescriptor);
  console.log('##########\n');
}

// Static method
function staticMethodDecorator(
  classConstructor: Constructor,
  nameMethod: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called when creating the method (no need to call the method)
  console.log('STATIC METHOD');
  console.log(classConstructor);
  console.log(nameMethod);
  console.log(propertyDescriptor);
  console.log('##########\n');
}

// Method parameter
function methodParameterDecorator(
  classPrototype: any,
  nameMethod: string,
  propertyIndex: PropertyDescriptor,
): any {
  // Called when creating the method
  console.log('METHOD PARAMETER');
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(propertyIndex);
  console.log('##########\n');
}

// Static method parameter
function staticMethodParameterDecorator(
  classConstructor: Constructor,
  nameMethod: string,
  propertyIndex: PropertyDescriptor,
): any {
  // Call on parameter creation (no need to call the method)
  console.log('STATIC METHOD PARAMETER');
  console.log(classConstructor);
  console.log(nameMethod);
  console.log(propertyIndex);
  console.log('##########\n');
}

// Property
function propertyDecorator(
  classPrototype: any,
  propertyName: string,
): any {
  // Call on property creation
  console.log('PROPERTY DECORATOR');
  console.log(classPrototype);
  console.log(propertyName);
  console.log('##########\n');
}

// Static Property
function staticPropertyDecorator(
  classConstructor: Constructor,
  propertyName: string,
): any {
  // Call on static property creation
  console.log('STATIC PROPERTY DECORATOR');
  console.log(classConstructor);
  console.log(propertyName);
  console.log('##########\n');
}

// Getter/Setter
function getterAndSetterDecorator(
  classPrototype: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor
): any {
  // Called when creating the method
  // (can only be applied to the getter or the setter - not both)
  console.log('GETTER/SETTER normal');
  console.log(classPrototype);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('##########\n');
}

// Static Getter/Setter
function staticGetterAndSetterDecorator(
  classConstructor: Constructor,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor
): any {
  // Called when creating the method
  // (can only be applied to the getter or the setter - not both)
  console.log('STATIC GETTER/SETTER');
  console.log(classConstructor);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('##########\n');
}

// The class is the use of decorators
@classDecorator
export class OnePerson {
  @propertyDecorator
  name: string;
  lastName: string;
  age: number;

  @staticPropertyDecorator
  static staticProperty = '';

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  @getterAndSetterDecorator
  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }

  @staticGetterAndSetterDecorator
  static get staticPropertyGetterSetter(): string {
    return OnePerson.staticProperty;
  }

  static set staticPropertyGetterSetter(value: string) {
    OnePerson.staticProperty = value;
  }

  @methodDecorator
  myMethod(@methodParameterDecorator msg: string) {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  @staticMethodDecorator
  static staticMethod (
    @staticMethodParameterDecorator msg: string,
  ): string {
    return OnePerson.staticProperty + msg;
  }
}

// Use of the class
const p1 = new OnePerson('Pedro', 'Miranda', 45);
const method = p1.myMethod('Hello, World!');
console.log(method);
