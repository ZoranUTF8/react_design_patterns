/*

The prototype pattern is a useful way to share properties among many objects of the same type.Something like a class and
than the class instances ?
Prototype object is an object that is native to js and can be accessed by objects through the prototype chain.

The value of the  __proto__ property in any instance is a direct reference to the constructor's prototype.

If we try to access a property on any object js will go down the prototype chain to see if the property is available
within the prototype chain.

With this pattern we can avoid duplication of methods and properties so reducing the amount of memory needed

*/

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

Dog.prototype.play = () => console.log(`Dog is playing`);

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
}

SuperDog.prototype.fly = () => console.log(`SuperDog is flying`);

const dog1 = new Dog("Daisy");

const dog2 = new Dog("Max");

const dog3 = new Dog("Spot");

dog1.bark();
dog2.bark();

console.log(Dog.prototype);
console.log(dog1.__proto__);

dog1.play();
dog2.play();

const superDog1 = new SuperDog("Super Dog Teddy");

superDog1.bark();
superDog1.fly();

console.log(superDog1.__proto__);

// * The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype
//* The Object.create method is a simple way to let objects directly inherit properties from other objects
const dog = {
  bark() {
    console.log("I am barking.");
  },
};

const pet1 = Object.create(dog);

pet1.bark();

console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));

const someOtherDog = Object.create(pet1);
someOtherDog.bark();
console.log(someOtherDog.__proto__);
