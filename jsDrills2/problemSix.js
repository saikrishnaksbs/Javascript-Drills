var inventoryData = require("./inventory.js");
function specificCarFinder(inventoryData) {
    var carDetails = inventoryData.filter(
        (carData) => carData["car_make"] == "Audi" || carData["car_make"] == "BMW"
    );
    return JSON.stringify(carDetails);
}
module.exports = specificCarFinder;
