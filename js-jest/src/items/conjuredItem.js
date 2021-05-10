const conjuredItem = (item) => {
  return {
    updateItem: () => {
      item.sellIn -= 1;

      // Don't actually need this because your logic safeguards against negative quality
      // if (item.quality > 0) {
        item.sellIn > 0 ? (item.quality -= 2) : (item.quality -= 4);
      // }

      if (item.quality < 0) {
        item.quality = 0;
      }
    },
  };
};

module.exports = conjuredItem;
