var inventoryData = require("./inventory.js");

function carFinder(inventoryData) {
  carDetails = inventoryData.filter((carData) => carData["id"] == 33);
  // console.log(carDetails)
  return [carDetails[0]["car_year"],
  carDetails[0]["car_make"],
  carDetails[0]["car_model"]];
}
module.exports = carFinder;