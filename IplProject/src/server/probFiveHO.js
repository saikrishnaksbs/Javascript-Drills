
const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

tossAndWin = {};

matchData.map(match => {

    tossWinner = match["toss_winner"];

    matchWinner = match["winner"];

    team1 = match["team1"];

    team2 = match["team2"];

    if (!tossAndWin[team1]) {

        tossAndWin[team1] = 0;
    }
    else if (!tossAndWin[team2]) {

        tossAndWin[team2] = 0;
    }
    if (tossWinner == matchWinner) {

        tossAndWin[matchWinner] += 1;
    }
}
);
console.log(tossAndWin);