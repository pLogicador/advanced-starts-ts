// Generics with intersection
// Without needing to mutate the objects passed as parameters
// When we want TypeScript to automatically infer
export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 { // The return type of the function is intersection
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2); // return with assigned object
}

const obj1 = {key1: 'value1'};
const obj2 = {key2: 'value2'};
const join = joinObjects(obj1, obj2);

console.log(join);
