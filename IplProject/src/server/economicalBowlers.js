const fs = require("fs");

const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");


function economicalBowlers() {
  matchIdList = [];

  Bowlersdata = {};
  for (let match = 0; match < matchData.length; match++) {
    if (matchData[match]["season"] == "2015") {
      matchIdList.push(matchData[match]["id"]);
    }
  }
  for (let delivery = 0; delivery < deliveriesData.length; delivery++) {
    bolwer = deliveriesData[delivery]["bowler"];
    matchIds = deliveriesData[delivery]["match_id"];
    if (matchIdList.includes(matchIds)) {
      if (!Bowlersdata[bolwer]) {
        Bowlersdata[bolwer] = {};
        Bowlersdata[bolwer].runs = parseInt(
          deliveriesData[delivery]["total_runs"]
        );
        Bowlersdata[bolwer].balls = 1;
      } else {
        Bowlersdata[bolwer].runs += parseInt(
          deliveriesData[delivery]["total_runs"]
        );
        Bowlersdata[bolwer].balls += 1;
      }
    }
  }
  // console.log(Bowlersdata);
  economicalBowlers = {};

  for (var key in Bowlersdata) {
    economicalBowlers[key] = Bowlersdata[key].runs / (Bowlersdata[key].balls / 6);
  }
  var sortedEconomies = [];

  for (bolwers in economicalBowlers) {
    sortedEconomies.push([[bolwers], economicalBowlers[bolwers]]);
  }

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
  return topEconomicalBowlers;

}

topEconomicalBowlers = economicalBowlers();

console.log(topEconomicalBowlers);

fs.writeFileSync(
  "src/public/topTenEconomicalBowlers.json",
  JSON.stringify(topEconomicalBowlers),
  "utf-8"
);
