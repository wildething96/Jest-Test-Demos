const {
  answer,
  objectWords,
  function2,
  numberToString,
  planets,
  numPresent,
  sqCon,
  getCentry,
  binaryConverter,
} = require("../app.js");

test("Should be not null", () => {
  expect(answer).not.toBeNull();
});

test("Should be Truthy", () => {
  expect(answer).toBeTruthy();
});

test("Should be Truthy", () => {
  expect(!answer).not.toBeTruthy();
});

test("Should be Hello Wolrd", () => {
  expect(objectWords).toBe("Hello World");
});

test("Should be a length of 6 or longer", () => {
  expect(function2().length >= 6).toBeTruthy();
});

test("Should be a String", () => {
  expect(numberToString).toStrictEqual("5");
});

test("planets(3) should be Earth", () => {
  expect(planets[3]).toBe("Earth");
});

test("Should be a String", () => {
  expect(numPresent).toStrictEqual(3);
});

test("sqCon(34) should return 916", () => {
  expect(sqCon(34)).toStrictEqual("916");
});

test("getCentry(1705) should return 17", () => {
  expect(getCentry(1705)).toStrictEqual(17);
});

test("binaryConverter([1, 0, 1, 0]) should return 5", () => {
  expect(binaryConverter([1, 0, 1, 0])).toStrictEqual(10);
});
