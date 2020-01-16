import Call from "./classes/Call/Call";
import MinutePrice from "./classes/MinutePrice/MinutePrice";
import { PRICES } from "./data/PRICES";

function returnResults({ origin, destiny, duration, plan }) {
  const minutePrice = new MinutePrice(origin, destiny, PRICES);
  const actualPrice = minutePrice.price();
  const newCall = new Call({
    origin,
    destiny,
    duration,
    minutePrice: actualPrice,
    plan
  });
  return newCall.getFormattedData();
}

export { returnResults };
