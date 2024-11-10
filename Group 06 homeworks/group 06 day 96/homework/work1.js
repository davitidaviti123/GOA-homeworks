let person = {
    name: "davit",
    lastName: "meparishvili",
    location: {
        country: "georgia",
        city: "tbilisi"
    },
    age: 13
};

person.name = "giorgi"
person.lastName = "vasadze"
person.location.country = "russia"
person.location.city = "moskov"
person.age = 15
person.gender = "male"
delete person.age

console.log(person)