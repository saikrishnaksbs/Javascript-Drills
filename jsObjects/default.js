var inventoryData = require("./inventory.js");

function defaults(objectData, newProprties) {
    for (key in newProprties) {
        if (!objectData[key]) {
            objectData[key] = newProprties[key]
        }
    }
    console.log(objectData);
    return objectData;
}
defaults(inventoryData, { village: "palivela", country: "india", name: "sai" });
module.exports = defaults;
