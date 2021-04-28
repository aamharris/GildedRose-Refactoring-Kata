const { MAX_QUALITY } = require("../constants");

const backstagePassItem = (item) => {
  return {
    updateItem: () => {
      if (item.quality < MAX_QUALITY) {
        item.quality += 1;

        if (item.sellIn < 11) {
          item.quality += 1;
        }
        if (item.sellIn < 6) {
          item.quality += 1;
        }
      }

      item.sellIn -= 1;
      if (item.sellIn < 0) {
        item.quality = 0;
      }
    },
  };
};

module.exports = backstagePassItem;
