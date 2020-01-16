import Call from "./Call";

const simulation = new Call({
  origin: 11,
  destiny: 16,
  duration: 20,
  minutePrice: 1.9,
  plan: 30
});

describe("Call class", () => {
  it("should return the origin DDD", () => {
    expect(simulation.getOrigin()).toBe(11);
  });
  it("should return the destiny DDD", () => {
    expect(simulation.getDestiny()).toBe(16);
  });
  it("should return the plan value", () => {
    expect(simulation.getPlan()).toBe(30);
  });
  it("should return the price per minute", () => {
    expect(simulation.getMinutePrice()).toBe(1.9);
  });
  it("should return the call price without a plan", () => {
    const price = simulation.getDuration() * simulation.getMinutePrice();
    expect(simulation.normalPrice()).toBe(price);
  });
  it("should return the call price with a plan", () => {
    expect(simulation.planPrice()).toBe(0);
  });
  it("should return the formatted data", () => {
    const formatted = {
      originDDD: 11,
      destinyDDD: 16,
      callDuration: 20,
      planValue: 30,
      costWithoutPlan: `R$ 38`,
      costWithPlan: `R$ 0`
    };
    expect(simulation.getFormattedData()).toStrictEqual(formatted);
  });
});
