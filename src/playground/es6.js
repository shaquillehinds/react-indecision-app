const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
