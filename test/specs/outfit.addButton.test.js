describe("Your Outfit: Add Button", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/");
    await page.evaluate(() =>
      localStorage.setItem(
        "outfit",
        JSON.stringify({ "1": 1, "2": 2, "3": 3, "4": 4 })
      )
    );
    await page.goto("http://localhost:3000/product/7");
    await page.waitForSelector("img.image-Related-product-1");
  });
  afterAll(async () => {
    await page.evaluate(() => localStorage.clear());
  });
  it("should always leave the add card on the screen", async () => {
    var right = await page.$("button.button-Outfit-right");
    await right.evaluate(right => right.click());
    var add = await page.$("button.addCardButton");
    await expect(add).toBeTruthy();
  });
});
