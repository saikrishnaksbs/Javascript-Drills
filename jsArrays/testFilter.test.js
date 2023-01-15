var testInventoryData = require("./testInv.js");
var filter = require("./filter.js");
test("Testing filter", () => {
    expect(filter(testInventoryData, (currentElement, position) => {
        // console.log(currentElement**2);
        return currentElement % 2 == 0;
    })).toStrictEqual([8]);
});