const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

matchesWonPerTeamPerYear = {};

matchData.map(match => {

    year = match["season"];
    team1 = match["team1"];
    team2 = match["team2"];
    winner = match["winner"];

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
);
console.log(matchesWonPerTeamPerYear);