var inventoryData = require("./inventory.js");

function map(objectData, callBack) {
  mappedElements = {};
  for (key in objectData) {
    const result = callBack(objectData[key], key);
    mappedElements[result[1]] = result[0];
  }
  console.log(mappedElements);
  return mappedElements;
}
map(inventoryData, (value, key) => {
  return [value + " hi", key];
}
);
module.exports = map;