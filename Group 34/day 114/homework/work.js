const thermometer = {
  _celsius: 0,
  get temperature() {
    return (this._celsius * 9) / 5 + 32;
  },
  set temperature(value) {
    if (typeof value === "number") {
      this._celsius = value;
    }
  },
};

const studentGrade = {
  _score: 0,
  get grade() {
    if (this._score >= 90) return "A";
    if (this._score >= 80) return "B";
    if (this._score >= 70) return "C";
    if (this._score >= 60) return "D";
    return "F";
  },
  set score(value) {
    if (typeof value === "number" && value >= 0 && value <= 100) {
      this._score = value;
    }
  },
};

const secretPassword = {
  _hashed: "",
  get password() {
    return "*****";
  },
  set password(value) {
    if (typeof value === "string" && value.length > 0) {
      this._hashed = btoa(value);
    }
  },
};