var testInventoryData = require("./testInv.js");

var map = require("./map.js");

test("Testing map", () => {
  expect(map(testInventoryData, (currentElement, position) => {
    return currentElement;
  })).toStrictEqual(
    [9, 8, 1, 5, 3]);
});