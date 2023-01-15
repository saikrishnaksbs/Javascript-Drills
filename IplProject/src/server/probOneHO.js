const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

matchesPlayedPerYear = {};

matchData.map(match => {

    year = match["season"];

    if (!matchesPlayedPerYear[year]) {

        matchesPlayedPerYear[year] = 1;
    }
    else {
        matchesPlayedPerYear[year] += 1;
    }
}
);
console.log(matchesPlayedPerYear);
