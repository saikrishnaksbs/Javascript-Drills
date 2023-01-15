
var testInventoryData = require("./testInv.js");

var invert = require("./invert.js");

test("Testing values", () => {
    expect(invert(testInventoryData))
        .toStrictEqual({ '25': 'age', 'sai krishna': 'name', konaseema: 'location' }
        );
});
