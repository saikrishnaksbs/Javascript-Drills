var inventoryData = require("./inventory.js");
function lastCar(inventoryData) {
    carDetails = [];
    for (var vehicle in inventoryData) {
        vehiclePosition = inventoryData[vehicle];
        carDetails.push(vehiclePosition["id"]);
    }
    maxIdValue = Math.max(...carDetails);
    for (var vehicle in inventoryData) {
        vehiclePosition = inventoryData[vehicle];
        carDetails.push(vehiclePosition["id"]);
    }
    maxIdValue = Math.max(...carDetails);
    carDetails = inventoryData[vehicle];
    if (carDetails["id"] == maxIdValue) {
        return [carDetails["car_make"], carDetails["car_model"]];
    }
}
module.exports = lastCar;