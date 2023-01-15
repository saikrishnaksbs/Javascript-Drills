var inventoryData = require("./inventory.js");

var specificCarFinder = require("./problemSix.js");
vehicleDetails = specificCarFinder(inventoryData);
console.log(vehicleDetails);

var oldCarFinder = require("./problemFive.js");
carDetails = oldCarFinder(inventoryData);
console.log(carDetails);

var yearFinder = require("./problemFour.js");
yearDetails = yearFinder(inventoryData);
console.log(yearDetails);

var sortingCars = require("./problemThree.js");
sortedDetails = sortingCars(inventoryData);
console.log(sortedDetails);

var lastCar = require("./problemTwo.js");
lastCarDetails = lastCar(inventoryData);
console.log(lastCarDetails);

var carFinder = require("./problemOne.js");
uniqueCarDetails = carFinder(inventoryData);
console.log(uniqueCarDetails);