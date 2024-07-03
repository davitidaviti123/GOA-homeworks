let book = {
    title: "harry potter",
    author: "J.K rowling",
    yearPublished: 2001,
    incomeMoney: 20000000
}
delete book.yearPublished

console.log(book.title)

while (i < 50){
    console.log(book.title,book.author,book.yearPublished,book.incomeMoney);
    i++;
}

let objects = [person = {name: daviti, age: 12},person1 = {name:giorgi, age: 10}]

let car = {
    motor : {
        cylynder: "6 cylynder",
        model: "mercedes, high tech"
    },
    appereance : {
        windows: "6, full and high tech",
        doors: 4,
        wheels: 4,
        conditioners: 6,
        weight: "6 tons"
    }
}
console.log(car.motor.cylynder)