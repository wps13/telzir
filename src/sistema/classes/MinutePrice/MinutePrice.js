class MinutePrice {
  constructor(origin, destiny, prices = []) {
    this.origin = parseInt(origin);
    this.destiny = parseInt(destiny);
    this.prices = prices;
  }
  price() {
    const result = this.prices.find(
      price => price.origin === this.origin && price.destiny === this.destiny
    );
    return typeof result !== "undefined" ? result : 0;
  }
}

export default MinutePrice;
