class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Mammal extends Animal {
  constructor(name, isWarmBlooded) {
    super(name);
    this.isWarmBlooded = isWarmBlooded;
  }
}

class Dog extends Mammal {
  constructor(name, isWarmBlooded, breed) {
    super(name, isWarmBlooded);
    this.breed = breed;
  }
}

const dog = new Dog("jeka", true, "german shepherd");
console.log(dog.name, dog.isWarmBlooded, dog.breed);