
describe("Ratings & Reviews", () => {

  beforeEach(async () => {
    await page.goto("http://localhost:3000/product/8");
    await page.waitForSelector("#reviews-section");
  });

  it("Should have the correct title", async () => {
    expect(await page.$eval("#reviews-title", el => el.innerText)).toBe("RATINGS & REVIEWS");
  });

  it("Should initially load two reviews onto the page", async () => {
    expect(await page.$$eval(".review-tile", els => els.length)).toBe(2);
  });

  it("Should load more reviews onto the page on button click", async () => {
    await page.$eval(".show-more-reviews", el => el.click());
    expect(await page.$$eval(".review-tile", els => els.length)).toBe(4);
    await page.$eval(".show-more-reviews", el => el.click());
    expect(await page.$$eval(".review-tile", els => els.length)).toBe(6);
  });

  it("Should render add a review form on button click", async () => {
    await page.$eval(".add-review", el => el.click());
    expect(await page.$("#review-form")).toBeTruthy();
  });

  it("Should display errors upon form submit with empty fields", async () => {
    await page.$eval(".add-review", el => el.click());
    await page.$eval(".review-submit", el => el.click());
    expect(await page.$$eval(".review-error", els => els.length)).toBe(6);
  });

});