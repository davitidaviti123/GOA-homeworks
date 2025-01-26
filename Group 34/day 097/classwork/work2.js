const person = {
  name: "davit",
  lastName: "meparishvili",
  age: 13,
  country: "georgia"
};

for (const key in person) {
  if (String(person[key]).length < 5) {
    console.log(`${key}: ${person[key]}`);
  }
}