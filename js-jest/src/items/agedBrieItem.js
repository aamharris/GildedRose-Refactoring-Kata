const { MAX_QUALITY } = require("../constants");

const agedBrie = (item) => {
  return {
    updateItem: () => {
      item.sellIn -= 1;
      if (item.quality < MAX_QUALITY) {
        item.quality += 1;
      }
    },
  };
};

module.exports = agedBrie;
