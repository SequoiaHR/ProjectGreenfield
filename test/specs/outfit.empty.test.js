beforeEach(async () => {
  await page.goto("http://localhost:3000/");
  await page.evaluate(() => localStorage.clear());
});

describe("Your Outfit", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/product/7");
    await page.waitForSelector("img.image-Related-product-1");
  });

  test("should start out empty", async () => {
    var product7 = await page.$("img.image-Outfit-product-7");
    await expect(product7).toBeFalsy();
  });
});
