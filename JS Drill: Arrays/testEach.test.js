var testInventoryData = require("./testInv.js");


var each = require("./each.js");

test("Testing problem1", () => {
    expect(each(testInventoryData,(element,index) =>{
        return [element,index];
      }))
    .toStrictEqual([ [ 9, 0 ], [ 8, 1 ], [ 1, 2 ], [ 5, 3 ], [ 3, 4 ]  ]);
});