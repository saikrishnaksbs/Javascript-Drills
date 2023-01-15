var testInventoryData = require("./testInv.js");


var specificCarFinder = require("./problemOne.js");

test("Testing problem1", () => {
    expect(specificCarFinder(testInventoryData))
    .toStrictEqual([ 2003, 'Volvo', 'XC70' ]);
});