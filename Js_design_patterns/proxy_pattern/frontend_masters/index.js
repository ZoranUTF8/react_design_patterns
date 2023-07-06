const person = {
  username: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`${new Date()} | The value of ${prop} is ${target[prop]}`);

    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);

    switch (prop) {
      case "username":
        // The username property has to be a string that only contains of letters, and is at least 3 characters long

        if (prop.length < 3 || !/^[a-zA-Z]+$/.test(prop)) {
          throw new Error("Invalid username");
        }
        break;
      case "email":
        // The email prƒoperty has to be a valid email address.
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailRegex.test(prop)) {
          throw new Error("Invalid email");
        }
      case "age":
        //  The age property has to be a number, and has to be at least 18
        if (typeof prop !== "number" || prop < 18) {
          throw new Error("Invalid age");
        }

      default:
        break;
    }

    target[prop] = value;
    return true;
  },
});

console.log(personProxy.username);
