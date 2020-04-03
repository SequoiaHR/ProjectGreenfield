import calculateRating from "../../src/calculateRating.js";
var testDataMixedStar = {
  product_id: "1",
  ratings: {
    "1": 19,
    "2": 8,
    "3": 13,
    "4": 16,
    "5": 33
  }
};
var testDataNoOneStar = {
  product_id: "1",
  ratings: {
    "2": 8,
    "3": 13,
    "4": 16,
    "5": 33
  }
};
var testDataFiveStar = {
  product_id: "1",
  ratings: {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 600
  }
};

describe("Calculate Rating Function", () => {
  test("Should calculate a Five Star Rating correctly", () => {
    let outcome = calculateRating(testDataFiveStar);
    expect(outcome).toBe("5.0");
  });
  test("Should calculate a rating correctly on mixed rating data", () => {
    let outcome = calculateRating(testDataMixedStar);
    expect(outcome).toBe("3.4");
  });
  test("Should calculate a rating correctly on rating data that has no one star ratings", () => {
    let outcome = calculateRating(testDataNoOneStar);
    expect(outcome).toBe("4.1");
  });
});
