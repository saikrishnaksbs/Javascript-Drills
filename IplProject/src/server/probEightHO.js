const fs = require("fs");

const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

dismisals = {};

deliveriesData.map((deliveries) => {

    bowler = deliveries["bowler"];

    playerDismissed = deliveries["player_dismissed"];

    dismissalKind = deliveries["dismissal_kind"];

    if (playerDismissed && dismissalKind != "run out") {

        if (!(playerDismissed in dismisals)) {

            dismisals[playerDismissed] = {};
        }
        if (!(bowler in dismisals[playerDismissed])) {

            dismisals[playerDismissed][bowler] = 1;
        }

        dismisals[playerDismissed][bowler] += 1;
    }
});

maxDismisals = {};
Object.keys(dismisals).map((batsman) => {

    dismisals[batsman] = maxDismissed(dismisals[batsman]);
    maxDismisals[batsman] = dismisals[batsman];
});

function maxDismissed(listOfDismissals) {
    mostOfdismisals = { bowlerName: "", dismissed: 0 };
    Object.keys(listOfDismissals).map((player) => {

        if (listOfDismissals[player] > mostOfdismisals.dismissed) {

            mostOfdismisals.bowlerName = player;
            mostOfdismisals.dismissed = listOfDismissals[player];
        }
    });
    return mostOfdismisals;
}

console.log(maxDismisals);