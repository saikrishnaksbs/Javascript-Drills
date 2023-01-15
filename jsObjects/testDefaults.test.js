var testInventoryData = require("./testInv.js");
var defaults = require("./default.js");
test("Testing keys", () => {
    expect(defaults(testInventoryData, { village: "palivela", country: "india", name: "sai" }))
        .toStrictEqual({
            name: 'sai krishna',
            age: 25,
            location: 'konaseema',
            village: 'palivela',
            country: 'india'
        }
        );
});
