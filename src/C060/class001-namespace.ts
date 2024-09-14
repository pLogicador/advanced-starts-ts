// Creating a namespace
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/class002-namespace.ts" />

console.log(MyNameSpace);

/*
-> In tsconfig:
    to avoid the error in the javascript runtime it is necessary to change the
    "module" system to the external library "AMD" or "System" and you will
    still need to configure "outFile" instead of "outDir"

-> In terminal:
    npx tsc src/C060/class001-namespace.ts --outFile src/C060/class001-namespace.ts
 */
