class Animal {
    constructor (name,type,age){
        this.name = name
        this.type = type
        this.age = age
    }
    moving() {
        console.log(`${this.name} is moving..`)
    }
}

const animal1 = new Animal("Leo", "Lion", 5);
const animal2 = new Animal("Milo", "Cat", 2);
const animal3 = new Animal("Bella", "Dog", 3);

animal1.moving()
animal2.moving()
animal3.moving()

class Car {
    constructor (brand,color){
        this.brand = brand
        this.color = color
    }
    startEngine() {
        console.log("starting the engine..")
    }
    stopEngine() {
        console.log("stopping the engine..")
    }
}

const car1 = new Car("Toyota", "black");
car1.startEngine()
car1.stopEngine()

class Human {
    constructor (name,age){
        this.name = name
        this.age = age
    }
    greet () {
        console.log("Hello!")
    }
}

const human1 = new Human("davit",13)
human1.greet()