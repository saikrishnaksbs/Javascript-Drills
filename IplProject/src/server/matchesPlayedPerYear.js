const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

function matchesPlayedEveryYear() {

    matchesPlayedPerYear = {};

    for (let match = 0; match < matchData.length; match++) {

        year = matchData[match]["season"];

        if (!matchesPlayedPerYear[year]) {

            matchesPlayedPerYear[year] = 1;
        }
        else {
            matchesPlayedPerYear[year] += 1;
        }
    }
    return matchesPlayedPerYear;
}

matchesPlayedPerYear = matchesPlayedEveryYear();
console.log(matchesPlayedPerYear);

fs.writeFileSync("src/public/matchesPlayedPerYear.json", JSON.stringify(matchesPlayedPerYear), "utf-8");