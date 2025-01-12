// Array Destructuring
const arr = [1, 2, 3, 4, 5];
const [first, , , , last] = arr;
console.log(first, last);

// Object Destructuring
const obj = { a: 10, b: 20, c: 30 };
const { a, c } = obj;
console.log(a, c);

// Renaming Variables
const obj2 = { x: 42, y: 84 };
const { x: alpha, y: beta } = obj2;
console.log(alpha, beta);

// Skipping Values
const numbers = [100, 200, 300, 400];
const [, second] = numbers;
console.log(second);

// Destructuring in Loops
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
for (const { name, age } of people) {
  console.log(name, age);
}

// Combining Destructuring and Rest Syntax
const array = [10, 20, 30, 40];
const [head, ...tail] = array;
console.log(head, tail);

// Using Destructuring with Map and Filter
const data = [
  { id: 1, value: 10 },
  { id: 2, value: 15 },
  { id: 3, value: 5 }
];
const filtered = data.filter(({ value }) => value > 10);
console.log(filtered);

// Destructuring Arrays with Mixed Types
const mixedArray = [1, { key: 'value' }, 3];
const [num, { key }, anotherNum] = mixedArray;
console.log(num, key, anotherNum);

// Manual Destructuring Function
function manualDestructing(obj) {
  const keys = Object.keys(obj);
  const values = [];
  for (const key of keys) {
    values.push(obj[key]);
  }
  return values;
}

const testObj = { a: 1, b: 2, c: 3 };
console.log(manualDestructing(testObj));