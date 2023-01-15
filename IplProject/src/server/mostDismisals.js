const fs = require('fs');

const deliveriesData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

function mostDismisals() {

    dismisals = {};

    for (let deliveries = 0; deliveries < deliveriesData.length; deliveries++) {

        bowler = deliveriesData[deliveries]["bowler"];

        playerDismissed = deliveriesData[deliveries]["player_dismissed"];

        dismissalKind = deliveriesData[deliveries]["dismissal_kind"];

        if (playerDismissed && dismissalKind != "run out") {
            if (!(playerDismissed in dismisals)) {
                dismisals[playerDismissed] = {};
            }
            if (!(bowler in dismisals[playerDismissed])) {

                dismisals[playerDismissed][bowler] = 1;
            }

            dismisals[playerDismissed][bowler] += 1;
        }
    }

    maxDismisals = {}
    for (batsman in dismisals) {
        dismisals[batsman] = maxDismissed(dismisals[batsman]);
        maxDismisals[batsman] = dismisals[batsman];

    }
    return maxDismisals;
}
function maxDismissed(listOfDismissals) {
    mostOfdismisals = { bowlerName: "", dismissed: 0 }
    for (player in listOfDismissals) {

        if (listOfDismissals[player] > mostOfdismisals.dismissed) {
            mostOfdismisals.bowlerName = player;
            mostOfdismisals.dismissed = listOfDismissals[player];
        }
    }
    return mostOfdismisals;
}
maxDismisals = mostDismisals();

console.log(maxDismisals);

fs.writeFileSync("src/public/maxDismisals.json", JSON.stringify(maxDismisals), "utf-8");