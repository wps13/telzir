import MinutePrice from "./MinutePrice";
import { PRICES } from "sistema/data/PRICES";

const price = new MinutePrice(11, 16, PRICES);

describe("MinutePrice class", () => {
  it("should return the correct price", () => {
    expect(price.price()).toBe(1.9);
  });
});
