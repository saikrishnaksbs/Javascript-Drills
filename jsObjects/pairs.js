var inventoryData = require("./inventory.js");

function pairs(objectData) {
    keyValues = [];
    for (key in objectData) {
        keyValuePairs = []
        if (objectData.hasOwnProperty(key)) {
            keyValuePairs.push(key);
            keyValuePairs.push(objectData[key]);
        }
        keyValues.push(keyValuePairs);
    }
    console.log(keyValues);
    return keyValues;
}
pairs(inventoryData);
module.exports = pairs;
