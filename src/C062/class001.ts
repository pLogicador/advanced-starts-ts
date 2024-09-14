// Using third-party libraries in TS
import _ from 'lodash';
import validator from 'validator';

console.log(validator.isEmail('pedro@gmail.com'));
console.log(_.clone([1,2,3,4]));

/*
* When using the standard command:
    npm i library-name

* Add to recognize typing:
    npm i @types/library-name -D

Important: type validation and auto-complete
*/
