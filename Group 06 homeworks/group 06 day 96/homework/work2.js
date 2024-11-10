let numbers = [1,2,3,4,5,6];

numbers.push(7);

numbers.shift();

let checkIndexFour = numbers.indexOf(4);

let evenNumbersInNums = numbers.filter(num => num % 2 == 0);

console.log(numbers)
console.log(checkIndexFour)
console.log(evenNumbersInNums)