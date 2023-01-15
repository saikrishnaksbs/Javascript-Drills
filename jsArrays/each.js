var inventoryData = require("./inventory.js");

function each(arrayValues, callBack) {
  arrayData = []
  for (var position = 0; position < arrayValues.length; position++) {
    value = callBack(arrayValues[position], position);
    arrayData.push(value);
  }
  console.log(arrayData)
  return arrayData;
}

each(inventoryData, (element, position) => {
  return [element, position];
});
module.exports = each;