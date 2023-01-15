const fs = require('fs');

const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");
const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

matchIdList = [];

extraRuns = {};

matchData.map(match => {

    if (match["season"] == "2016") {
        matchIdList.push(match["id"]);
    }
}
);
deliveriesData.map(delivery => {

    team = delivery["bowling_team"];
    matchIds = delivery["match_id"];
    if (matchIdList.includes(matchIds)) {
        if (!extraRuns[team]) {
            extraRuns[team] = parseInt(delivery["extra_runs"]);
        }
        else {
            extraRuns[team] += parseInt(delivery["extra_runs"]);
        }
    }
}
);
console.log(extraRuns);