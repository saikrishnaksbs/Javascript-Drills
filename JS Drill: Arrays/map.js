var inventoryData = require("./inventory.js");

function map(elements, cb) {
  mappedElements=[];
  for (var index = 0; index < elements.length; index++) {
    const result = cb(elements[index],index);
    mappedElements.push(result);
  }
  console.log(mappedElements)
  return mappedElements
}
map(inventoryData,(currentElement,index) =>
{
    // console.log(currentElement**2);
    return currentElement;
}
);
console.log(a);
module.exports = map;
