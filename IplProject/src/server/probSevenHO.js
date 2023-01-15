const fs = require("fs");

const deliveryData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

matchids = {};

matchData.map(match => {

  year = match["season"];
  id = match["id"];

  if (!matchids[id]) {

    matchids[id] = year;
  }
}
);

strikeRate = {};

deliveryData.map(delivery => {

  idOfMatch = delivery["match_id"];
  season = matchids[idOfMatch];
  batsman = delivery["batsman"];
  batsman_runs = delivery["batsman_runs"];

  if (!strikeRate[batsman]) {

    strikeRate[batsman] = {};
  }
  if (!(season in strikeRate[batsman])) {

    strikeRate[batsman][season] = [0, 0];
  }

  strikeRate[batsman][season][0] += parseInt(batsman_runs);
  strikeRate[batsman][season][1] += 1;

}
);
onlyStikeRates = {};

Object.keys(strikeRate).map(batsman => {

  onlyStikeRates[batsman] = {};

  Object.keys(strikeRate[batsman]).map(years => {

    strikerates =
      (strikeRate[batsman][years][0] / strikeRate[batsman][years][1]) * 100;
    onlyStikeRates[batsman][years] = strikerates;

  });

});

console.log(onlyStikeRates);