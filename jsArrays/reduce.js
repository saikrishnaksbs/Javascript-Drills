var inventoryData = require("./inventory.js");
function reduce(arrayValues, callBack, initialValue) {
    presentValue = initialValue;
    for (var position = 0; position < arrayValues.length; position++) {
        if (presentValue) {
            presentValue = callBack(presentValue, arrayValues[position])
        }
        else {
            presentValue = arrayValues[position];
        }
    }
    console.log(presentValue);
    return [presentValue];
}
reduce(inventoryData, (presentValue, presentElement) => {
    return presentValue + presentElement;
}
);
module.exports = reduce;