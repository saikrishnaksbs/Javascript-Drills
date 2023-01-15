var inventoryData = require("./inventory.js");
function oldCarFinder(inventoryData) {
    var carDetails = new Set();
    for (var vehicle in inventoryData) {
        vehiclePosition = inventoryData[vehicle];
        if (vehiclePosition["car_year"] > 2000) {
            carDetails.add(vehiclePosition["car_year"]);
        }
    }
    allCarDetails = [...carDetails];
    for (var vehicle in inventoryData) {
        var vehiclePosition = inventoryData[vehicle];
        year = vehiclePosition["car_year"];
        index = allCarDetails.indexOf(year);
        if (allCarDetails.includes(year)) {
            if (index !== -1) {
                allCarDetails[index] = vehiclePosition;
            }
        }
    }
    return [allCarDetails.length,allCarDetails];
}
module.exports = oldCarFinder;