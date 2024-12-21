const person = {
  name: "davit",
  lastName: "meparishvili",
  age: 13,
  country: "georgia"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}