// Optional Chaining and Null Coalescing Operator
type ExDocument = {
  title: string;
  text: string;
  date?: Date;
}

const exDocument: ExDocument = {
  title: 'The Title',
  text: 'Some text content',
  // date: new Date(), // Uncomment to test with a defined date
}

// Using Optional Chaining to safely access the 'date' property
// Using Nullish Coalescing to provide a default message if 'date' is null or undefined
console.log(exDocument.date?.toDateString() ?? '1- No date available.');
console.log(undefined ?? '2- No date available.');
console.log(null ?? '3- No date available.');
console.log(false ?? '4- No date available.');
