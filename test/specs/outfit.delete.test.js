beforeEach(async () => {
  await page.goto("http://localhost:3000/");
  await page.evaluate(() => localStorage.clear());
});

describe("Your Outfit: Delete Functionality", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/product/7");
    await page.waitForSelector("img.image-Related-product-1");
  });

  test("should add and delete a product", async () => {
    // Click add button on product 7 page
    var add = await page.$("button.addCardButton");
    await add.evaluate(add => add.click());
    // Click delete button for product 7
    var removeButton = await page.$("button.actionButton.product-7.Outfit");
    await removeButton.evaluate(removeButton => removeButton.click());
    var product7 = await page.$("img.image-Outfit-product-7");
    await expect(product7).toBeFalsy();
  });
});
