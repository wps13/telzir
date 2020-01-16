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
    return result.price;
  }
}

export default MinutePrice;
