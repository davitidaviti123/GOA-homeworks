let numbers = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)        // created array of numbers 1-10 in task 1
numbers.push(11)           // added new element to end of array in task 2
numbers.unshift(0)        // added in start in task 3
numbers.pop()             // removed last element from array in task 4
numbers.shift()           // removed first element in task 5
document.write(numbers.length) // found length of array in task 6
numbers[2]        // accesed third element in task 7
while (numbers != 0){
    console.log(numbers)             // iterated numbers values in task 8
}
let letters = new Array ("A", "B", "C", "D", "E", "F", "G")
let combined = numbers.concat(letters)                    // created new array and combined first array in new object in task 9