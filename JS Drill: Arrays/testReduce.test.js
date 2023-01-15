var testInventoryData = require("./testInv.js");
var yearFinder = require("./reduce.js");
test("Testing problem4", () => {
    expect(yearFinder(testInventoryData, (presentValue,presentElement) => {
        return presentValue+presentElement;
    }))
    .toStrictEqual([ 26 ]);
});