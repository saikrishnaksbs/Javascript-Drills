
var testInventoryData = require("./testInv.js");

var pairs = require("./pairs.js");

test("Testing values", () => {
    expect(pairs(testInventoryData))
        .toStrictEqual([['name', 'sai krishna'],
        ['age', 25],
        ['location', 'konaseema']]
        );
});
