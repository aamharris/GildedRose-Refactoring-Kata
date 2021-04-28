const { SULFURAS, MAX_QUALITY, AGED_BRIE, BACKSTAGE_PASSES } = require("./constants");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const legendaryItem = () => {
  return {
    updateItem: () => {},
  };
};

const conjuredItem = (item) => {
  return {
    updateItem: () => {
      item.sellIn -= 1;

      if (item.quality > 0) {
        item.sellIn > 0 ? (item.quality -= 2) : (item.quality -= 4);
      }

      if (item.quality < 0) {
        item.quality = 0;
      }
    },
  };
};

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
