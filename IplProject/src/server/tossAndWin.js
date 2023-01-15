const fs = require('fs');

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

function coincidence() {

    tossAndWin = {};

    for (let match = 0; match < matchData.length; match++) {

        tossWinner = matchData[match]["toss_winner"];

        matchWinner = matchData[match]["winner"];

        team1 = matchData[match]["team1"];

        team2 = matchData[match]["team2"];

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
    return tossAndWin;
}

tossAndWin = coincidence();
console.log(tossAndWin);
fs.writeFileSync("src/public/tossAndWin.json", JSON.stringify(tossAndWin), "utf-8");