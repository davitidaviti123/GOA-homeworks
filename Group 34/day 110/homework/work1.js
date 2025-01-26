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

const animal1 = new Animal("lomi", "Lion", 5);

animal1.moving()

class Car {
    constructor (brand,color,model){
        this.brand = brand
        this.color = color
        this.model = model
    }
    startEngine() {
        console.log("starting the engine..")
    }
    stopEngine() {
        console.log("stopping the engine..")
    }
}

const car1 = new Car("Toyota", "black", "prius");
car1.startEngine()
car1.stopEngine()

class Human {
    constructor (name,lastName,age){
        this.name = name
        this.lastName = lastName
        this.age = age
    }
    greet () {
        console.log("Hello!")
    }
}

const human1 = new Human("davit","meparishvili",13)
human1.greet()