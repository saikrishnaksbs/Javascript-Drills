var inventoryData = require("./inventory.js");

function values(objectData) {
    valuesOfobject = [];
    for (key in objectData) {
        if (objectData.hasOwnProperty(key)) {
            valuesOfobject.push(objectData[key]);
        }
    }
    console.log(valuesOfobject);
    return valuesOfobject;
}
values(inventoryData);
module.exports = values;