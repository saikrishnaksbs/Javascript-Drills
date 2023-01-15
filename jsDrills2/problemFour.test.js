var testInventoryData = require("./testInv.js");


var yearFinder = require("./problemFour.js");

test("Testing problem4", () => {
    expect(yearFinder(testInventoryData))
    .toStrictEqual([  2008, 1996,
        1997, 2011,
        2003, 2005,
        2010 ]);
});