const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  describe("UpdateQuantity", () => {
    it("lowers the quality and sellIn by one for the item after each day", () => {
      const quality = 5;
      const sellIn = 5;
      const gildedRose = new Shop([new Item("foo", quality, sellIn)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(quality - 1);
      expect(items[0].quality).toEqual(sellIn - 1);
    });

    it("lowers the quality twice as fast when sellIn has passed", () => {
      const quality = 5;
      const gildedRose = new Shop([new Item("foo", 0, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(quality - 2);
    });

    it("does not allow quality to be negative", () => {
      const quality = 0;
      const gildedRose = new Shop([new Item("foo", 0, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(quality);
    });

    it("increases quality for aged brie", () => {
      const quality = 5;
      const gildedRose = new Shop([new Item("Aged Brie", 5, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(quality + 1);
    });

    it("increases quality for backstage passes by two when sellin date is 10 days or less", () => {
      const quality = 5;
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(quality + 2);
    });

    it("increases quality for backstage passes by three when sellin date is 5 days or less", () => {
      const quality = 5;
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(quality + 3);
    });

    it("sets quality for backstage passes to zero when past the sellIn date", () => {
      const quality = 5;
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("increases quality for backstage passes by one when sellin date is more than 10 days", () => {
      const quality = 5;
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(quality + 1);
    });

    it("does not allow quality to exceed 50", () => {
      const maxQuality = 50;
      const gildedRose = new Shop([new Item("Aged Brie", 5, maxQuality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(maxQuality);
    });
  });
});
