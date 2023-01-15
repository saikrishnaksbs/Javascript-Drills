var inventoryData = require("./inventory.js");

function carFinder(inventoryData) {
  for (var vehicle in inventoryData) {
    carDetails = inventoryData[vehicle];
    if (carDetails["id"] == 33) {
      return [
        carDetails["car_year"],
        carDetails["car_make"],
        carDetails["car_model"],
      ];
    }
  }
}
module.exports = carFinder;