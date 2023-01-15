const fs = require('fs');

const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");
const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

function extraRunsByEachTeam() {


    matchIdList = []
    extraRuns = {};

    for (let match = 0; match < matchData.length; match++) {

        if (matchData[match]["season"] == "2016") {
            matchIdList.push(matchData[match]["id"]);
        }
    }
    for (let delivery = 0; delivery < deliveriesData.length; delivery++) {

        team = deliveriesData[delivery]["bowling_team"];
        matchIds = deliveriesData[delivery]["match_id"];
        if (matchIdList.includes(matchIds)) {
            if (!extraRuns[team]) {
                extraRuns[team] = parseInt(deliveriesData[delivery]["extra_runs"]);
            }
            else {
                extraRuns[team] += parseInt(deliveriesData[delivery]["extra_runs"]);
            }
        }
    }
    return extraRuns;
}
extraRuns = extraRunsByEachTeam();
console.log(extraRuns);

fs.writeFileSync("src/public/extraRuns.json", JSON.stringify(extraRuns), "utf-8");