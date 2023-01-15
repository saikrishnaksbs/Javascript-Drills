var inventoryData = require("./inventoryForFlatten.js");
function flatten(arrayValues, unWrappedArray = []) {
    for (var position = 0; position < arrayValues.length; position++) {
        if (Array.isArray(arrayValues[position])) {
            flatten(arrayValues[position], unWrappedArray);
        }
        else {
            unWrappedArray.push(arrayValues[position]);
        }
    }
    console.log(unWrappedArray);
    return unWrappedArray;
}
flatten(inventoryData);
module.exports = flatten;