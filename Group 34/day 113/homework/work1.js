class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get initials() {
    return `${this.firstName?.[0] ?? ''}${this.lastName?.[0] ?? ''}`;
  }

  get ageInMonths() {
    return this.age ? this.age * 12 : 0;
  }

  get isRetired() {
    return this.age >= 60;
  }
}

class Product {
  constructor(price, discount = 0) {
    this.price = price;
    this.discount = discount;
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  get discountPrice() {
    const discounted = this.price - (this.price * this.discount) / 100;
    return `$${discounted.toFixed(2)}`;
  }
}

const person = new Person("John", "Doe", 65);
console.log(person.initials);
console.log(person.ageInMonths);
console.log(person.isRetired);

const product = new Product(100, 20);
console.log(product.formattedPrice);
console.log(product.discountPrice);
