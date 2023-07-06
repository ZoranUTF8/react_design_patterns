class Observable {
  constructor() {
    this.observers = [];
  }

  // Method to add observers to the observers list
  subscribe(subscriber) {
    this.observers = this.observers.concat(subscriber);
  }

  // Method to remove observers from the observers list
  unsubscribe(subscriber) {
    this.observers = this.observers.filter((sub) => sub !== subscriber);
  }

  // Method to notify all observers of a specific event
  notify(data) {
    this.observers.forEach((sub) => sub(data));
  }
}

export default Observable;
