var inventoryData = require("./inventory.js");

function invert(objectData) {
    InvertedObject = {};
    for (key in objectData) {
        InvertedObject[objectData[key]] = key;
    }
    console.log(InvertedObject);
    return InvertedObject;
}
invert(inventoryData);
module.exports = invert;
