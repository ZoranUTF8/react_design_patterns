// ? With a proxy object we get more control over the interaction with certain object. Instead of speaking with an object directly
// ? we will speak with a  proxy which will be used to represent the object
//! Not to use proxies for performance-critical code.

const personObject = {
  name: "Zoran",
  age: 33,
};

const personObjectProxy = new Proxy(personObject, {
  get: (obj, prop) => {
    console.log(`The value of the property ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed the ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
});

personObjectProxy.name; // ? The value of the property name is Zoran
personObjectProxy.name = "Nikola"; // ? Changed the name from Zoran to Nikola
personObjectProxy.name; // ? The value of the property name is Nikola

//? A proxy object can be usefull to add validation,formatting,notification before we apply any changes to the real object

/*
The usage of proxies in JavaScript can be beneficial for several reasons:

Validation and Data Consistency: You can use proxies to validate the input data before it is set on an object. For example, you can ensure that only valid email addresses are assigned to an email property.

Security: Proxies can be used to protect sensitive data by preventing direct access to it. For example, you can use proxies to restrict access to certain properties or methods of an object based on the user's role or permissions.

Logging and Debugging: Proxies can be used to log or debug operations performed on an object. You can intercept and log every operation performed on an object and analyze it for debugging or audit purposes.

Virtualization: Proxies can be used to create virtual objects or implement lazy-loading. For example, you can create a virtual array that retrieves its data from a remote server on demand.

Wrapping Third-Party Libraries: Proxies can be used to wrap third-party libraries and provide a consistent interface to them. This allows you to customize the behavior of a library without modifying its source code.
*/
