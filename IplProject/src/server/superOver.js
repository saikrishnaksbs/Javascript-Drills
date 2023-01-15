const { constants } = require("buffer");
const fs = require("fs");

const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

function bestOfSuperOver() {

    Bowlersdata = {};

    for (let delivery = 0; delivery < deliveriesData.length; delivery++) {
        bolwer = deliveriesData[delivery]["bowler"];

        if (deliveriesData[delivery]["is_super_over"] == "1") {

            if (!Bowlersdata[bolwer]) {
                Bowlersdata[bolwer] = {};
                Bowlersdata[bolwer].runs = parseInt(
                    deliveriesData[delivery]["total_runs"]
                );
                Bowlersdata[bolwer].balls = 1;
            }
            else {
                Bowlersdata[bolwer].runs += parseInt(
                    deliveriesData[delivery]["total_runs"]
                );
                Bowlersdata[bolwer].balls += 1;
            }
        }
    }
    economicalBowlers = {};

    for (var key in Bowlersdata) {
        economicalBowlers[key] = Bowlersdata[key].runs / (Bowlersdata[key].balls / 6);
    }
    bestBowler = { bowler: "", economy: 999 }
    for (player in economicalBowlers) {

        if (economicalBowlers[player] < bestBowler.economy) {
            bestBowler.bowler = player;
            bestBowler.economy = economicalBowlers[player];
        }
    }
    return bestBowler;
}
bestBowler = bestOfSuperOver();
console.log(bestBowler);
fs.writeFileSync("src/public/bestBowlerInSuperOver.json", JSON.stringify(bestBowler), "utf-8");
