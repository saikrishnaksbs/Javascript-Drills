var inventoryData = require("./inventory.js");
function find(elements, cb, value) {
  for (var index = 0; index < elements.length; index++) {
    const result = cb(elements[index], value);
    if (result) {
      console.log(elements[index], index);
      return [elements[index], index];
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