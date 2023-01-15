var inventoryData = require("./inventory.js");

function oldCarFinder(inventoryData) {

    carDetails = inventoryData.filter((carData) =>
        carData["car_year"] > 2000);
    return [carDetails.length, carDetails];
}
module.exports = oldCarFinder;