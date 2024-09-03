// TypeScript's Structural Type System Example

/*
  - TypeScript uses a structural type system, which means that the name of the type doesn't matter as much as the structure (shape) of the type.
  - As long as the data satisfies the expected shape (having the necessary properties), TypeScript is satisfied, regardless of the type's name.
*/

// Defining a 'User' type with 'username' and 'password'
type User = { username: string; password: string };

// Function type declaration that verifies a user based on 'username' and 'password'
// The function takes two 'User' objects as arguments and returns a boolean indicating whether the credentials match
type VerifyUserFn = (user: User, receivedUser: User) => boolean;

// Implementation of the 'verifyUser' function
const verifyUser: VerifyUserFn = (user, receivedUser) => {
  return (
    user.username === receivedUser.username && // Check if usernames match
    user.password === receivedUser.password    // Check if passwords match
  );
};

// Simulated user data
const dataBaseUser = { username: 'John', password: '123456' };   // User stored in the database
const receivedUser = { username: 'Maikon', password: '1234567' }; // User attempting to log in

// Verify if the received user matches the stored user
const loggedIn = verifyUser(dataBaseUser, receivedUser);
console.log(loggedIn); // Output: false (usernames or passwords don't match)
