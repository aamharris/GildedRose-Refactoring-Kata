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

    // This is sort of what I mean by making this more functional.
    //
    // What if instead of a `createItem` function and individual `updateItem` functions
    // We just had a single updateItem interface which was of this signature: (item) => item;
    // The logic could (and should) still be separated out into individual item updates of the same signature
    // and we wouldn't have to worry about mutating items or scoping issues
    // since everything would be a straight forward function.
    //
    // You could then make updates like this:
    //
    // this.items = this.items.map(updateItem);

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
