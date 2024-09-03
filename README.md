# TypeScript Overview

## TypeScript is a typed superset of JavaScript that compiles down to plain JavaScript. It adds static types, interfaces, and modern JavaScript features like classes and modules, improving the developer experience with features like type-checking and autocompletion. Since it compiles to standard JavaScript, TypeScript can be run in any environment that supports JavaScript.

### Key Features of TypeScript

- **Static Typing**: Allows developers to specify types for variables, functions, and properties, catching type-related errors early.
- **Type Inference**: TypeScript automatically infers types when possible, reducing the need to explicitly declare types.
- **Modern JavaScript Support**: TypeScript supports ES6+ features (like classes, arrow functions, and modules) even if the target environment doesn't support them.
- **Interfaces and Generics**: TypeScript provides the ability to define and enforce contracts using interfaces and work with dynamic data structures using generics.

</br>
</br>

# Script Mode vs Module Mode in TypeScript

## TypeScript can operate in two main modes when working with files: Script Mode and Module Mode. The mode is determined by the presence of imports or exports within the file.

### Script Mode

- **Description**: In script mode, the TypeScript file behaves like a traditional JavaScript script, where variables and functions are accessible globally.
- **Characteristics**:
  - No imports or exports are present.
  - Files are treated as global scripts; any variable or function declared is automatically part of the global scope.
  - Used for older codebases or when migrating plain JavaScript files to TypeScript.
- **Example**:

```typescript
// Global scope
const greet = () => {
  console.log('Hello, world!');
};
greet();
```

### Module Mode

- **Description**: In module mode, the file is treated as a module, meaning that it has its own scope and does not pollute the global namespace. Variables, functions, classes, and interfaces are only accessible within the file unless they are explicitly exported.
- **Characteristics**:
  - Requires at least one `import` or `export` statement.
  - Variables and functions are confined to the module scope and need to be exported to be accessed externally.
  - Promotes modularity, reusability, and better code organization.
- **Example**:

```typescript
// Exporting a function
export const greet = () => {
  console.log('Hello, world!');
};

// Importing the function in another file
import { greet } from './moduleFile';
greet();
```

</br>
</br>

# Development vs Production Files in TypeScript

## When working with TypeScript, there are typically two stages of a project: development and production. Each stage has its own configuration and concerns.

### Development Files

- **Description**: During development, files are typically unminified, contain inline source maps, and may include helpful debugging information. Developers focus on writing, testing, and debugging code at this stage.

- **Characteristics**:

  - Full TypeScript files with complete types and structures.
  - Contains verbose error messages, comments, and code that help during the debugging process.
  - Source maps are generated, enabling developers to trace errors in the original TypeScript files even when debugging the compiled JavaScript.

- **Configuration Example (tsconfig.json)**:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "sourceMap": true, // Enables source maps for debugging
    "outDir": "./dist/dev", // Output directory for development
    "strict": true
  }
}
```

### Production Files

- **Description**: Production files are optimized for deployment. They are compiled, minified, and stripped of unnecessary comments and debugging information to reduce file size and improve performance.

- **Characteristics**:

  - Compiled JavaScript files without comments and with minification applied.
  - No inline source maps (although source maps can be generated separately).
  - Optimized for speed and performance, with dead code elimination and smaller file sizes.

- **Configuration Example (tsconfig.prod.json)**:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "sourceMap": false, // Source maps disabled for production
    "outDir": "./dist/prod", // Output directory for production
    "removeComments": true, // Remove comments for production
    "declaration": false // Do not generate .d.ts files for production
  }
}
```

### Workflow

- **During Development**: Use TypeScript files for better type checking and developer experience. Tools like Webpack or `tsc --watch` are typically used for automatic recompilation and bundling.
- **During Production**: Use the compiled JavaScript files. These files are often minified and optimized using tools like Terser or UglifyJS. The goal is to serve efficient code for performance-critical environments.

</br>
</br>
</br>

# Summary

- **TypeScript** is a strongly-typed superset of JavaScript that adds static types, interfaces, and modern features, compiling to JavaScript.
- **Script Mode** operates in a global scope, whereas **Module Mode** confines scope to individual files with imports and exports.
- **Development Files** contain debugging information, type annotations, and comments, aiding the developer, while Production Files are optimized, minified, and ready for deployment.
