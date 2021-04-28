const { SULFURAS, AGED_BRIE, BACKSTAGE_PASSES } = require("./constants");
const agedBrie = require("./items/agedBrieItem");
const backstagePassItem = require("./items/backstagePassItem");
const conjuredItem = require("./items/conjuredItem");
const legendaryItem = require("./items/legendaryItem");
const standardItem = require("./items/standardItem");

function createItem(item) {
  if (item.name === SULFURAS) {
    return legendaryItem(item);
  } else if (item.name === AGED_BRIE) {
    return agedBrie(item);
  } else if (item.name === BACKSTAGE_PASSES) {
    return backstagePassItem(item);
  } else if (item.name.toLowerCase().includes("conjured")) {
    return conjuredItem(item);
  } else {
    return standardItem(item);
  }
}

module.exports = createItem;
