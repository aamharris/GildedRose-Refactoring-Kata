const standardItem = (item) => {
  return {
    updateItem: () => {
      item.sellIn -= 1;
      if (item.sellIn < 0 && item.quality > 0) {
        item.quality -= 1;
      }
      if (item.quality > 0) {
        item.quality -= 1;
      }
    },
  };
};

module.exports = standardItem;
