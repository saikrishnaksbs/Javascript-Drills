var inventoryData = require("./inventory.js");
function sortingCars(inventoryData) {
    carDetails = inventoryData.sort(function (presentCar, nextCar) {
        const presentModel = presentCar.car_model.toUpperCase();
        const nextModel = nextCar.car_model.toUpperCase();
        if (presentModel > nextModel) {
            return 1;
        }
        if (presentModel < nextModel) {
            return -1;
        }
        return 0;
    });
    return carDetails;
}
module.exports = sortingCars;
