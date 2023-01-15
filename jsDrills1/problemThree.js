var inventoryData = require("./inventory.js");
function sortingCars(inventoryData) {
    var carDetails = [];
    for (var vehicle in inventoryData) {
        vehiclePosition = inventoryData[vehicle];
        carDetails.push(vehiclePosition["car_model"].toUpperCase());
    }

    carDetails = carDetails.sort();
    for (var vehicle in inventoryData) {
        var vehiclePosition = inventoryData[vehicle];

        model = vehiclePosition["car_model"].toUpperCase();
        index = carDetails.indexOf(model);

        if (index !== -1) {
            carDetails[index] = vehiclePosition;
        }
    }
    console.log(carDetails)
    return carDetails;
}
sortingCars(inventoryData)
module.exports = sortingCars;