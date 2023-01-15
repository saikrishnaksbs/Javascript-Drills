var inventoryData = require("./inventory.js");
function lastCar(inventoryData) {
    carDetails = inventoryData.reduce(
        (maxId, currentId) => (currentId.id > maxId.id - 1 ? currentId : maxId),
        inventoryData[0]
    );
    console.log(carDetails)
    return [carDetails["car_make"], carDetails["car_model"]];
}
module.exports = lastCar;