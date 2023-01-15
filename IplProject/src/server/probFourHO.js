const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

matchIdList = [];

Bowlersdata = {};

matchData.map(match => {

    if (match["season"] == "2015") {

        matchIdList.push(match["id"]);
    }
}
);

deliveriesData.map(delivery => {

    bolwer = delivery["bowler"];
    matchIds = delivery["match_id"];

    if (matchIdList.includes(matchIds)) {

        if (!Bowlersdata[bolwer]) {

            Bowlersdata[bolwer] = {};

            Bowlersdata[bolwer].runs = parseInt(
                delivery["total_runs"]
            );

            Bowlersdata[bolwer].balls = 1;
        } else {

            Bowlersdata[bolwer].runs += parseInt(
                delivery["total_runs"]
            );

            Bowlersdata[bolwer].balls += 1;
        }
    }
}
);
// console.log(Bowlersdata);
economicalBowlers = {};

Object.keys(Bowlersdata).map(key => {
    economicalBowlers[key] = Bowlersdata[key].runs / (Bowlersdata[key].balls / 6);
}
);

var sortedEconomies = [];

Object.keys(economicalBowlers).map(bowlers => {
    sortedEconomies.push([[bowlers], economicalBowlers[bowlers]]);
}
);

sortedEconomies.sort((currentBowler, nextBowler) => {
    return currentBowler[1] - nextBowler[1];
});

topEconomicalBowlers = [];

for (let economies = 0; economies < 10; economies++) {
    details = {
        bowler: sortedEconomies[economies][0][0],
        economy: sortedEconomies[economies][1],
    };
    topEconomicalBowlers.push(details);
}

economyCount = 0
sortedEconomies.map(economies => {
    if (economyCount < 10) {

        details = {
            bowler: economies[0][0],
            economy: economies[1],
        };
        topEconomicalBowlers.push(details);
        economyCount++;
    }


});

bowlerPosition = 0
Object.keys(sortedEconomies).filter(economies => {
    if (bowlerPosition < 10) {
        details = {
            bowler: sortedEconomies[economies][0][0],
            economy: sortedEconomies[economies][1],
        };
        topEconomicalBowlers.push(details);
        bowlerPosition++;
    }

})
console.log(topEconomicalBowlers);