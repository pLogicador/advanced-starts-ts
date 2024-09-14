// Reference for importing files
/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  console.log("Hello World");

  class PersonNamespaceWithoutExport {
    constructor(public name: string) {}
  }

  const p1 = new PersonNamespaceWithoutExport('ScopeN1');
  console.log(p1);

  export class PersonTheNamespaceWithExport {
    constructor(public name: string) {}
  }

  const p2 = new PersonTheNamespaceWithExport('ScopeN2');
  console.log(p2);
}

// This scope does not have access (with 'export' you get access)
/*
const p1 = new PersonNamespaceWithoutExport('Pedro');
console.log(p1);
*/

// Accessing due to 'export'
const p2 = new MyNameSpace.PersonTheNamespaceWithExport('MainScope0');
console.log(p2);
