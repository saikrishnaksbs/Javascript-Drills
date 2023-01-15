var testInventoryData = require("./testInv.js");


var oldCarFinder = require("./problemFive.js");

test("Testing problem5", () => {
    expect(oldCarFinder(testInventoryData))
    .toStrictEqual([  5,
        [
          { id: 1, car_make: 'Audi', car_model: 'TT', car_year: 2008 },
          { id: 44, car_make: 'Jeep', car_model: 'XC70', car_year: 2011 },
          { id: 33, car_make: 'Volvo', car_model: 'XC70', car_year: 2003 },
          { id: 66, car_make: 'BMW', car_model: '525', car_year: 2005 },
          { id: 77, car_make: 'BMW', car_model: '6 Series', car_year: 2010 }
        ] ]);
});