var testInventoryData = require("./testInv.js");


var find = require("./problemThree.js");

test("Testing problem3", () => {
    expect(find(testInventoryData, (currentElement) => {
        if (currentElement == 5) {
          return true;
        } else {
          return 0;
        }
      }))
    .toStrictEqual([5,3]);
});