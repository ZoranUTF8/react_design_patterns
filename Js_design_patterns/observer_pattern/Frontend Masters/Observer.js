const observers = [];

const Observer = {
  notify: (data) => {
    console.log(`I am notifying my subscribers with ${data}`);
    observers.forEach((observer) => observer(data));
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
