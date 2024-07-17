let book = {
    title: "sherlock holmes",
    author: "Sir Arthur Conan Doyle",
    yearPublished: 1891,
                          // added new property in task 2 and deleted in task 3.
}
console.log(book.title)     // accessed property in book object and printed it in task 4.
while(book != 0){
    console.log(book.title,book.author,book.yearPublished)          // iterated book values in console log
}


const arr1 = new Array ({name: "david", age: 13}, {name: "giorgi", age:30}, {name: "lasha", age: 20})
document.write(arr1.length)                        // array of people in task 8


let car = {
    model: {
        brend: "mercedes",
        year: 2015
    },
    motor: {                           // made object with methods in task 9 and printed one of properties
        mode: "6 cylynder",
        country: "germany"
    },
    carInside: {
        doors: "4 high tech, automatic glass puller with button",
        materialOfCloth: "high quality and comfy dutt, wool inside material"
    }
}
console.log(car.motor.mode)