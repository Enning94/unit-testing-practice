const { stringLength, reverseString,Calculator,capitalizeFirstLetter} = require("./unit-testing.js");

describe("Practice test cases", () => {
  test("return string char count", () => {
    expect(stringLength("hello")).toBe(5);
  });

  test("reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("perform calculation", () => {
  test("add a to b", () => {
    const a = 2;
    const b = 3;
    const performCalculation = new Calculator(a, b);
    expect(performCalculation.add()).toBe(5);
  });

  test("subtract b from a", () => {
    const a = 2;
    const b = 3;
    const performCalculation = new Calculator(a, b);
    expect(performCalculation.subtract()).toBe(-1);
  });

  test("divide a by b", () => {
    const a = 12;
    const b = 3;
    const performCalculation = new Calculator(a, b);
    expect(performCalculation.divide()).toBe(4);
  });

  test("multiply a by b", () => {
    const a = 2;
    const b = 3;
    const performCalculation = new Calculator(a, b);
    expect(performCalculation.multiply()).toBe(6);
  });
});

describe ('Capitalize the first letter of a string', () => {
   test("first letter of the string to upper case", () => {
      expect(capitalizeFirstLetter("Hello")).toBe("Hello");
    });
})
