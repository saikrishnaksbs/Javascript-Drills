
var testInventoryData = require("./testInv.js");

var values = require("./values.js");

test("Testing values", () => {
    expect(values(testInventoryData))
        .toStrictEqual(['sai krishna', 25, 'konaseema']
        );
});
