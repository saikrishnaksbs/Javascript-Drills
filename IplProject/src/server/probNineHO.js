const fs = require("fs");

const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

Bowlersdata = {};

deliveriesData.map(delivery => {

    bolwer = delivery["bowler"];

    if (delivery["is_super_over"] == "1") {

        if (!Bowlersdata[bolwer]) {

            Bowlersdata[bolwer] = {};
            Bowlersdata[bolwer].runs = parseInt(
                delivery["total_runs"]
            );

            Bowlersdata[bolwer].balls = 1;
        }
        else {

            Bowlersdata[bolwer].runs += parseInt(
                delivery["total_runs"]
            );
            
            Bowlersdata[bolwer].balls += 1;
        }
    }
}
);
economicalBowlers = {};

Object.keys(Bowlersdata).map(key => {
    economicalBowlers[key] = Bowlersdata[key].runs / (Bowlersdata[key].balls / 6);
}
);

console.log(economicalBowlers);

bestBowler = { bowler: "", economy: 999 };

Object.keys(economicalBowlers).filter(player => {
    if (economicalBowlers[player] < bestBowler.economy) {
        bestBowler.bowler = player;
        bestBowler.economy = economicalBowlers[player];
    }
}
);

console.log(bestBowler);
