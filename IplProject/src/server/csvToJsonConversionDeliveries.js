const fs = require("fs");

let allDeliveriesLocation = "/home/saikrishna/javaScript/IplProject/src/data/deliveries.csv";
let allDeliveriesData = fs.readFileSync(allDeliveriesLocation, { encoding: 'utf-8' });

allDeliveriesData = allDeliveriesData.split("\n")
allDeliveriesData = allDeliveriesData.slice(0, -1);

deliveriesHeader = allDeliveriesData.shift().split(',');

let deliveriesData = []

allDeliveriesData.forEach(eachTerm => {
    termData = {}
    let delivery = eachTerm.split(',')
    for (let term in deliveriesHeader) {
        termData[deliveriesHeader[term]] = delivery[term];
    }
    deliveriesData.push(termData);
});
exports.deliveriesData = deliveriesData;
fs.writeFileSync("src/data/deliveries.json", JSON.stringify(deliveriesData), "utf-8");