var testInventoryData = require("./testInv.js");

var map = require("./mapObject.js");

test("Testing map", () => {
  expect(map(testInventoryData, (value,key) =>
  {
      return [value+" hi",key];
  })).toStrictEqual(
    { name: 'sai krishna hi', age: '25 hi', location: 'konaseema hi' } );
});