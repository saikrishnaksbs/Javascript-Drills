const fs = require("fs");

const deliveryData = require("/home/saikrishna/javaScript/IplProject/src/data/deliveries.json");

const matchData = require("/home/saikrishna/javaScript/IplProject/src/data/matches.json");

function strikeRateOfBatsman() {
  matchids = {};
  for (let match = 0; match < matchData.length; match++) {
    year = matchData[match]["season"];
    id = matchData[match]["id"];
    if (!matchids[id]) {
      matchids[id] = year;
    }
  }
  strikeRate = {};

  for (let delivery = 0; delivery < deliveryData.length; delivery++) {
    idOfMatch = deliveryData[delivery]["match_id"];
    season = matchids[idOfMatch];
    batsman = deliveryData[delivery]["batsman"];
    batsman_runs = deliveryData[delivery]["batsman_runs"];
    if (!strikeRate[batsman]) {
      strikeRate[batsman] = {};
    }
    if (!(season in strikeRate[batsman])) {
      strikeRate[batsman][season] = [0, 0];
    }
    strikeRate[batsman][season][0] += parseInt(batsman_runs);
    strikeRate[batsman][season][1] += 1;
  }
  onlyStikeRates = {};
  for (batsman in strikeRate) {
    onlyStikeRates[batsman] = {};
    for (years in strikeRate[batsman]) {
      strikerates =
        (strikeRate[batsman][years][0] / strikeRate[batsman][years][1]) * 100;
      onlyStikeRates[batsman][years] = strikerates;
    }
  }
  return onlyStikeRates;
}
onlyStikeRates = strikeRateOfBatsman();
console.log(onlyStikeRates);

