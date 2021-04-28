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

const concertItem = (item) => {
  return {
    updateItem: () => {
      if (item.quality < 50) {
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
      if (item.quality < 50) {
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
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return legendaryItem(item);
  } else if (item.name === "Aged Brie") {
    return agedBrie(item);
  } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    return concertItem(item);
  } else {
    return standardItem(item);
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = createItem(this.items[i]);
      item.updateItem();
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
