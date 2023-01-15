var testInventoryData = require("./testInv.js");

var keys = require("./keys.js");

test("Testing keys", () => {
    expect(keys(testInventoryData))
        .toStrictEqual(['name', 'age', 'location']
        );
});
