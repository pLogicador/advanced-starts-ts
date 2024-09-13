// Utility Types - Default Generics in TypeScript

// 2. Utility Types
// Record
const obj1: Record<string, string | number> = {
  name: 'Pedro',
  lastName: 'Miranda',
  age: 25,
}

console.log(obj1);

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
}

// Required
type PersonRequired = Required<PersonProtocol>;

// Partial
type PersonPartial = Partial<PersonRequired>;

// Readonly
type PersonReadonly = Readonly<PersonRequired>;

// Pick
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

const obj2: PersonRequired = {
  name: 'Pedro',
  lastName: 'Miranda',
  age: 25,
}

console.log(obj2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

/* 3. Data Transformation Example
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = {
  id: string;
  name: string;
  age: number;
}

const accountMongo: AccountMongo = {
  _id: 'ajkshkaskan556854asas',
  name: 'Roger',
  age: 50,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const {_id,...accountData} = accountMongo;
  return {...accountData, id: _id};
}

const accountApi = mapAccount(accountMongo);
console.log('\n\nAPI:');
console.log(accountApi);
*/
// 4. Data Transformation Example
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  lastName: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'ajkshkaskan556854asas',
  name: 'Roger',
  age: 50,
  lastName: 'Miranda',
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const {_id,...accountData} = accountMongo;
  return {...accountData, id: _id};
}

const accountApi = mapAccount(accountMongo);
console.log('\n\nAPI:');
console.log(accountApi);

// Module mode
export default 1;
