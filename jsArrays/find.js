var inventoryData = require("./inventory.js");
function find(arrayValues, callBack, value) {
  for (var position = 0; position < arrayValues.length; position++) {
    const result = callBack(arrayValues[position], value);
    if (result) {
      console.log(arrayValues[position], position);
      return [arrayValues[position], position];
    }
  }
}
find(inventoryData, (currentElement) => {
  if (currentElement == 5) {
    return true;
  } else {
    return 0;
  }
});
module.exports = find;