const createItem = require("./itemFactory");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {
      const inventoryItem = createItem(item);
      inventoryItem.updateItem();
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
