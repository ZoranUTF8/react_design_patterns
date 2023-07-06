import Observer from "./Observer.js";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

Observer.subscribe(logger);

Observer.notify("Hello");
