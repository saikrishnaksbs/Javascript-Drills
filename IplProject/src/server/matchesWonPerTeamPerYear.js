const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

function matchesWonPerTeamEveryYear(){

matchesWonPerTeamPerYear = {};

for (let match = 0; match < matchData.length; match++) {

    year = matchData[match]["season"];
    team1 = matchData[match]["team1"];
    team2 = matchData[match]["team2"];
    winner = matchData[match]["winner"];
    if (!matchesWonPerTeamPerYear[team1]) {
        matchesWonPerTeamPerYear[team1] = {};
    }
    if (!matchesWonPerTeamPerYear[team2]) {
        matchesWonPerTeamPerYear[team2] = {};
    }
    if (!(year in matchesWonPerTeamPerYear[team1])) {
        matchesWonPerTeamPerYear[team1][year] = 0;
    }
    if (!(year in matchesWonPerTeamPerYear[team2])) {
        matchesWonPerTeamPerYear[team2][year] = 0;
    }
    if (winner in matchesWonPerTeamPerYear) {
        if (year in matchesWonPerTeamPerYear[winner]) {
            matchesWonPerTeamPerYear[winner][year]++;
        }
    }
}
return matchesWonPerTeamPerYear;
}

matchesWonPerTeamPerYear=matchesWonPerTeamEveryYear();

console.log(matchesWonPerTeamPerYear);

fs.writeFileSync("src/public/matchesWonPerTeamPerYear.json", JSON.stringify(matchesWonPerTeamPerYear), "utf-8");