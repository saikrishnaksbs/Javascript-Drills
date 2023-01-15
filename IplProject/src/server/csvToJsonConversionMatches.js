const fs = require("fs");

let allMatchesLocation = "/home/saikrishna/javaScript/IplProject/src/data/matches.csv";
let allMatchesData = fs.readFileSync(allMatchesLocation, { encoding: 'utf-8' });

allMatchesData = allMatchesData.split("\n")
allMatchesData = allMatchesData.slice(0, -1)

crickektingTerms = allMatchesData.shift().split(',');

let matchesData = []

allMatchesData.forEach(eachTerm => {
    termData = {}
    let delivery = eachTerm.split(',')
    for (let term in crickektingTerms) {
        termData[crickektingTerms[term]] = delivery[term];
    }
    matchesData.push(termData);
});

fs.writeFileSync("src/data/matches.json", JSON.stringify(matchesData), "utf-8");


