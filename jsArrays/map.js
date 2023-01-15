var inventoryData = require("./inventory.js");

function map(arrayValues, callBack) {
  mappedElements = [];
  for (var position = 0; position < arrayValues.length; position++) {
    const result = callBack(arrayValues[position], position);
    mappedElements.push(result);
  }
  console.log(mappedElements);
  return mappedElements;
}
map(inventoryData, (currentElement, position) => {
  return currentElement;
}
);
module.exports = map;
