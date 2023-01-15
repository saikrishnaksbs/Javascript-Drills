var inventoryData = require("./inventory.js");
function yearFinder(inventoryData) {

    carDetails = inventoryData.map((carData) => carData["car_year"]);
    uniqueYears = new Set(carDetails);
    return [...uniqueYears];
}
module.exports = yearFinder;