var inventoryData = require("./inventory.js");
function reduce(elements,cb,initialValue) {
    presentValue=initialValue;
    for (var index = 0; index < elements.length; index++) {
       if(presentValue)
       {
        presentValue=cb(presentValue,elements[index])
        }
        else{
            presentValue=elements[index];
        }
    }
    console.log(presentValue);
    return [presentValue];
}
reduce(inventoryData, (presentValue,presentElement) => {
    return presentValue+presentElement;
}
);
module.exports = reduce;