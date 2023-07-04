// const crypto = require("crypto");

// const createUser = (firstName, lastName) => ({
//   id: crypto.randomUUID(),
//   createdAt: Date.now(),
//   firstName,
//   lastName,
//   fullName: `${firstName} ${lastName}`,
// });

// const a = createUser("John", "Doe");
// createUser("Sarah", "Doe");
// createUser("Lydia", "Hallie");

// console.log(a);

//  Task
const { createBook } = require("./books.js");

const book1 = createBook("John Book");
console.log(book1);
