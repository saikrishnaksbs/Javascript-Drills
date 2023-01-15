const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");


function manOfMatchesEveryYear() {
    manOfMatches = {};

    for (let match = 0; match < matchData.length; match++) {

        manOfMatch = matchData[match]["player_of_match"];

        year = matchData[match]["season"];

        if (!(year in manOfMatches)) {
            manOfMatches[year] = {};
        }
        if (!(manOfMatch in manOfMatches[year])) {

            manOfMatches[year][manOfMatch] = 1;
        }

        manOfMatches[year][manOfMatch] += 1;
    }

    maxMomsPerSeason = {}
    for (seasons in manOfMatches) {
        manOfMatches[seasons] = maxMoms(manOfMatches[seasons]);
        maxMomsPerSeason[seasons] = manOfMatches[seasons];

    }
    return maxMomsPerSeason;
}

function maxMoms(listOfMoms) {
    mostManOfMatches = { name: "", mom: 0 }
    for (player in listOfMoms) {

        if (listOfMoms[player] > mostManOfMatches.mom) {
            mostManOfMatches.name = player;
            mostManOfMatches.mom = listOfMoms[player];
        }
    }
    return mostManOfMatches;
}
maxMomsPerSeason = manOfMatchesEveryYear();
console.log(maxMomsPerSeason);

fs.writeFileSync("src/public/manOfMatches.json", JSON.stringify(maxMomsPerSeason), "utf-8");