// Create an observer to which the buttons can subscribe. When a user clicks on a button, this event should get sent to the fake analytics provider.

const observers = [];

const Observer = {
  notify: (data) => {
    console.log(observers), observers.forEach((observer) => observer(data));
  },

  subscribe: (func) => observers.push(func),

  unsubscribe: (func) => {
    observers.forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
};

Object.freeze(Observer);

export default Observer;
