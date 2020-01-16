const DISCOUNT_PLAN_PRICE = 0.1;

class Call {
  constructor({ origin, destiny, duration, minutePrice = 0, plan = 0 }) {
    this.origin = parseInt(origin);
    this.destiny = parseInt(destiny);
    this.duration = parseInt(duration);
    this.minutePrice = parseFloat(minutePrice);
    this.plan = parseInt(plan);
  }
  getOrigin() {
    return this.origin;
  }
  getDestiny() {
    return this.destiny;
  }
  getPlan() {
    return this.plan;
  }
  getMinutePrice() {
    return this.minutePrice;
  }
  getDuration() {
    return this.duration;
  }
  setOrigin(newOrigin) {
    this.origin = newOrigin;
  }
  setDestiny(newDestiny) {
    this.destiny = newDestiny;
  }
  setMinutePrice(minPrice) {
    this.minutePrice = minPrice;
  }
  setPlan(newPlan) {
    this.plan = newPlan;
  }
  setDuration(newDuration) {
    this.duration = newDuration;
  }
  normalPrice() {
    return this.minutePrice * this.duration;
  }
  planPrice() {
    if (this.duration <= this.plan) {
      return 0;
    } else {
      return (
        (this.duration - this.plan) * this.minutePrice * DISCOUNT_PLAN_PRICE
      );
    }
  }
  getFormattedData() {
    return {
      originDDD: this.origin,
      destinyDDD: this.destiny,
      callDuration: this.duration,
      planValue: this.plan,
      costWithoutPlan: `R$ ${this.normalPrice()}`,
      costWithPlan: `R$ ${this.planPrice()}`
    };
  }
}

export default Call;
