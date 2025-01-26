class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    start() {
      return `${this.brand} ${this.model} is starting.`;
    }
  
    drive() {
      return `${this.brand} ${this.model} is driving.`;
    }
  }
  
  class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
      super(brand, model);
      this.batteryCapacity = batteryCapacity;
    }
  
    start() {
      return `${this.brand} ${this.model} is starting silently.`;
    }
  
    drive() {
      return `${super.drive()} It is using electric power.`;
    }
  }
  
  const tesla = new ElectricCar("Tesla", "Model S", "100 kWh");
  console.log(tesla.start());
  console.log(tesla.drive());