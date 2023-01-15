var inventoryData = require("./inventory.js");
function specificCarFinder(inventoryData) {
    var carDetails = [];
    for (var vehicle in inventoryData) {
        vehiclePosition = inventoryData[vehicle];
        if (vehiclePosition["car_make"]=="Audi" || vehiclePosition["car_make"]=="BMW") {
            carDetails.push(vehiclePosition);
        }
    }
    
    return JSON.stringify(carDetails);
}
module.exports = specificCarFinder;