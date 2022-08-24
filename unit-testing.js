function stringLength(string) {
  let count = string.length;
  if (count >= 1 && count <= 10) {
    return count;
  }
  return "The must be one character short and ten characters long";
}

function reverseString(string) {
  let reverseStr = string.split("").reverse().join("");
  return reverseStr;
}

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    let sum = this.a + this.b;
    return sum;
  }
  subtract() {
    let deduct = this.a - this.b;
    return deduct;
  }
  divide() {
    let division = this.a / this.b;
    return division;
  }
  multiply() {
    let times = this.a * this.b;
    return times;
  }
};

function capitalizeFirstLetter(string){
  let reverseStr = string[0].toUpperCase()+string.slice(1);
  return reverseStr;
  };

module.exports = { stringLength, reverseString, Calculator,capitalizeFirstLetter};
