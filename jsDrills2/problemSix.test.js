var testInventoryData = require("./testInv.js");

var specificCarFinder = require("./problemSix.js");

test("Testing problem6", () => {
  expect(specificCarFinder(testInventoryData)).toStrictEqual(
    '[{"id":1,"car_make":"Audi","car_model":"TT","car_year":2008},{"id":11,"car_make":"Audi","car_model":"525","car_year":1996},{"id":66,"car_make":"BMW","car_model":"525","car_year":2005},{"id":77,"car_make":"BMW","car_model":"6 Series","car_year":2010}]'
  );
});