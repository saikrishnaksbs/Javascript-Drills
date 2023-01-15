var testInventoryData = require("./testInv.js");
var filter = require("./problemTwo.js");
test("Testing problem2", () => {
    expect(filter(testInventoryData,(currentElement, index) => {
        // console.log(currentElement**2);
        return currentElement % 2 == 0;
    })).toStrictEqual([8]);
});
