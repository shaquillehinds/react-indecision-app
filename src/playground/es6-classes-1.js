class Person {
  constructor(name = "Anonymouse", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `${description} Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  getGreeting() {
    let getGreeting = super.getGreeting();

    if (this.home) {
      getGreeting += `${getGreeting} I'm visiting from ${this.home}`;
    }
    return getGreeting;
  }
}

const me = new Traveller("Shaquille Hinds", 25, "Barbados");
console.log(me.getGreeting());
const other = new Traveller();
console.log(other.getGreeting());
