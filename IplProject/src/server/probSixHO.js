const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

manOfMatches = {};

matchData.map(match => {

    manOfMatch = match["player_of_match"];

    year = match["season"];

    if (!(year in manOfMatches)) {

        manOfMatches[year] = {};
    }
    if (!(manOfMatch in manOfMatches[year])) {

        manOfMatches[year][manOfMatch] = 1;
    }

    manOfMatches[year][manOfMatch] += 1;
}
);

maxMomsPerSeason = {}

Object.keys(manOfMatches).map(seasons => {

    manOfMatches[seasons] = maxMoms(manOfMatches[seasons]);
    maxMomsPerSeason[seasons] = manOfMatches[seasons];
}
);

function maxMoms(listOfMoms) {

    mostManOfMatches = { name: "", mom: 0 }
    Object.keys(listOfMoms).filter(player => {

        if (listOfMoms[player] > mostManOfMatches.mom) {

            mostManOfMatches.name = player;
            mostManOfMatches.mom = listOfMoms[player];
        }
    }
    );
    return mostManOfMatches;
}

console.log(maxMomsPerSeason);
