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
