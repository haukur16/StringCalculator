const add = require("./calculator");

it("Should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("Should return number if only one number in string", () => {
  expect(add("5")).toBe(5);
});

it("Should return sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("Should return sum of multible numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

it("Should allow other than comma", () => {
  expect(add("1\n2,3")).toBe(6);
});

it("should throw an exception", () => {
  expect(() => {add('2,-4,3,-5');
}).toThrow('Negatives not allowed: -4,-5');
});

it("Should not count numbers higher than 1000", () => {
  expect(add("1001,2")).toBe(2);
});

it("Should allow new delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});
