var inventoryData = require("./inventory.js");
function yearFinder(inventoryData) {
    var carDetails = new Set()
    for (var vehicle in inventoryData) {
        vehiclePosition = inventoryData[vehicle];
        carDetails.add(vehiclePosition["car_year"]);
    }
    return [...carDetails];
}
module.exports = yearFinder;