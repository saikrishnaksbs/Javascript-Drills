var inventoryData = require("./inventory.js");


function each(elements, cb) {
  arrayValues=[]
  for (var index = 0; index < elements.length; index++) {
   value=cb(elements[index],index);
   arrayValues.push(value);
  }
  return arrayValues;
}

each(inventoryData,c);
module.exports = each;