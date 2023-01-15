var inventoryData = require("./inventory.js");
function filter(elements, cb) {
    filteredElements = [];
    for (var index = 0; index < elements.length; index++) {
        const result = cb(elements[index], index);
        if (result) {
            filteredElements.push(elements[index]);
        }
    }
    return filteredElements
}
filter(inventoryData, (currentElement, index) => {
    // console.log(currentElement**2);
    return currentElement % 2 == 0;
}
);
module.exports = filter;