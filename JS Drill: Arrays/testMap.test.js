var testInventoryData = require("./testInv.js");

var map = require("./map.js");

test("Testing problem6", () => {
  expect(map(testInventoryData, (item, index) => {
    return currentElement;
  })).toStrictEqual(
    [ 9, 8, 1, 5, 3 ] );
});