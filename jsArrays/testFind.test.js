var testInventoryData = require("./testInv.js");

var find = require("./find.js");

test("Testing find", () => {
  expect(find(testInventoryData, (currentElement) => {
    if (currentElement == 5) {
      return true;
    } else {
      return 0;
    }
  }))
    .toStrictEqual([5, 3]);
});