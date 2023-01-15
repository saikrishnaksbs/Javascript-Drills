var testInventoryData = require("./testInv.js");
var lastCar = require("./problemTwo.js");
test("Testing problem2", () => {
    expect(lastCar(testInventoryData)).toStrictEqual(["BMW", "6 Series"]);
});
