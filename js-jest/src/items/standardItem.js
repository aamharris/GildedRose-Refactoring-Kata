// What if this simply was the update function and took in an item and returned a new one
// i.e.
// const standardItemUpdate = (item) => {
//   const sellIn = item.sellIn - 1;
//   let quality = item.quality;
//   if (sellIn < 0 && quality > 0) {
//     quality -= 1;
//   }
//   if (quality > 0) {
//     quality -= 1;
//   }
//   return new Item(item.name, sellIn, quality)
// };


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
