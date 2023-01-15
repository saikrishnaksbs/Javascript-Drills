var inventoryData = require("./inventory.js");
function filter(arrayValues, callBack) {
    filteredElements = [];
    for (var position = 0; position < arrayValues.length; position++) {
        const result = callBack(arrayValues[position], position);
        if (result) {
            filteredElements.push(arrayValues[position]);
        }
    }
    return filteredElements
}
filter(inventoryData, (currentElement, position) => {
    // console.log(currentElement**2);
    return currentElement % 2 == 0;
}
);
module.exports = filter;