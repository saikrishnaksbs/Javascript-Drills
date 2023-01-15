var testInventoryData = require("./testInvForFlatten.js");
var flatten = require("./flatten.js");
test("Testing flatten", () => {
  expect(flatten(testInventoryData, unWrappedArray = [])).toStrictEqual([1, 2, 3, 4, 5]);
});
