var testInventoryData = require("./testInv.js");
var reduce = require("./reduce.js");
test("Testing reduce", () => {
    expect(reduce(testInventoryData, (presentValue, presentElement) => {
        return presentValue + presentElement;
    }))
        .toStrictEqual([26]);
});