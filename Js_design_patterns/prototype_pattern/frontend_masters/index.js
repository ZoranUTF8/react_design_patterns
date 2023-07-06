// const createDog = (name, age) => ({
//   name,
//   age,
//   bark() {
//     console.log(`${name} is barking!`);
//   },
//   wagTail() {
//     console.log(`${name} is wagging their tail!`);
//   },
// });

// const dog1 = createDog("Max", 4);
// const dog2 = createDog("Sam", 2);
// const dog3 = createDog("Joy", 6);
// const dog4 = createDog("Spot", 8);

// console.log(dog1);

/*
However, we're unnecessarily adding a new bark and wagTail
methods to each dog object. Under the hood, we're creating
two new functions for each dog object, which uses memory.
*/

// We can use the Prototype Pattern to share these methods among many dog objects.

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name} is barking!`);
  }
  wagTail() {
    console.log(`${this.name} is wagging their tail!`);
  }
}

const dog1 = new Dog("Max", 4);
const dog2 = new Dog("Sam", 2);
const dog3 = new Dog("Joy", 6);
const dog4 = new Dog("Spot", 8);

console.log({ dog1, dog2, dog3, dog4 });

dog1.bark();
dog2.wagTail();

console.log(dog1 === dog2);

// Test Refactor this factory function to a class.

// const createUser = ({ firstName, lastName, email }) => ({
//     firstName,
//     lastName,
//     fullName: `${firstName} ${lastName}`,
//     email,
//     checkLastOnline: () => {
//       console.log(`${this.fullName} was last online at ${Date.now()}`);
//     },
//     sendEmail: () => {
//       console.log(`Email sent to ${email}`);
//     },
//     delete: () => {
//       console.log('User removed');
//     },
//   });

//   const user = createUser({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@doe.com',
//   });

//   const user2 = createUser({
//     firstName: 'Jane',
//     lastName: 'Doe',
//     email: 'jane@doe.com',
//   });

//   console.log(user.delete === user2.delete);

class User {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`);
  }

  delete() {
    console.log(`User ${this.firstName} removed`);
  }
}

const user = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});

console.log(user === user2);
