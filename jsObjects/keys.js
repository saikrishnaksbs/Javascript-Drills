var inventoryData = require("./testInv.js");

function keys(objectData) {
    keysOfObject = [];
    for (key in objectData) {
        keysOfObject.push(key);
    }
    console.log(keysOfObject)
    return keysOfObject;
}
keys(inventoryData);
module.exports = keys;