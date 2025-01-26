class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  get perimeter() {
    return 2 * (this.length + this.width);
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.perimeter);