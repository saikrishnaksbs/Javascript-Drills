var testInventoryData = require("./testInv.js");

var each = require("./each.js");

test("Testing problem1", () => {
  expect(each(testInventoryData, (element, position) => {
    return [element, position];
  }))
    .toStrictEqual([[9, 0], [8, 1], [1, 2], [5, 3], [3, 4]]);
});