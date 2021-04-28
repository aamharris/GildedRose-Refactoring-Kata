const { AGED_BRIE, BACKSTAGE_PASSES } = require("../src/constants");
const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  describe("UpdateQuantity", () => {
    describe("standard items", () => {
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
    });

    describe("aged brie", () => {
      it("increases quality for aged brie", () => {
        const quality = 5;
        const gildedRose = new Shop([new Item(AGED_BRIE, 5, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(quality + 1);
      });

      it("does not allow quality to exceed 50", () => {
        const maxQuality = 50;
        const gildedRose = new Shop([new Item(AGED_BRIE, 5, maxQuality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(maxQuality);
      });

      it("reduces sellIn by one", () => {
        const sellIn = 10;
        const gildedRose = new Shop([new Item(AGED_BRIE, sellIn, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(sellIn - 1);
      });
    });

    describe("backstage passes", () => {
      it("increases quality by 1 when sellIn date is greater than 10", () => {
        const quality = 5;
        const gildedRose = new Shop([new Item(BACKSTAGE_PASSES, 11, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(quality + 1);
      });

      it("increases quality by 2 when sellin date is 10 days or less", () => {
        const quality = 5;
        const gildedRose = new Shop([new Item(BACKSTAGE_PASSES, 10, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(quality + 2);
      });

      it("increases quality by 3 when sellin date is 5 days or less", () => {
        const quality = 5;
        const gildedRose = new Shop([new Item(BACKSTAGE_PASSES, 5, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(quality + 3);
      });

      it("sets quality for backstage passes to zero when past the sellIn date", () => {
        const quality = 5;
        const gildedRose = new Shop([new Item(BACKSTAGE_PASSES, 0, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
      });

      it("decreases sellIn by 1", () => {
        const sellIn = 5;
        const gildedRose = new Shop([new Item(BACKSTAGE_PASSES, sellIn, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(sellIn - 1);
      });
    });

    describe("legendary items", () => {
      it("does not decrement sellIn or quality for legendary items", () => {
        const quality = 5;
        const sellIn = 10;
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(quality);
        expect(items[0].sellIn).toEqual(sellIn);
      });
    });

    describe("conjured items", () => {
      it("degrades by two when sellIn is greater than zero", () => {
        const quality = 10;
        const gildedRose = new Shop([new Item("Conjured Mana Cake", 5, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(quality - 2);
      });

      it("degrades by four when sellIn is less than zero", () => {
        const quality = 10;
        const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(quality - 4);
      });

      it("cannot have a quality lower than zero", () => {
        const quality = 0;
        const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
      });
    });
  });
});
