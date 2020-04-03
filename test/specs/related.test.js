describe("Related Products", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/product/7");
    await page.waitForSelector("img.image-Related-product-1");
  });

  it("should show the correct image for Product #1", async () => {
    // Select an image with the given class and use it in a callback function
    const src = await page.$eval("img.image-Related-product-1", img =>
      // Get the image's src URL
      img.getAttribute("src")
    );
    await expect(src).toBe(
      "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
    );
  });

  it("should re-route to the correct URL after clicking Product #1", async () => {
    // Get Element with this selector
    const img = await page.$("img.image-Related-product-1");
    // Click on this element
    await img.evaluate(img => img.click());
    // Check the current browser URL
    let checkUrl = await page.evaluate(() => location.href);
    // Expect it to equal the new product ID
    await expect(checkUrl).toBe("http://localhost:3000/product/1");
  });

  it("should correctly move Product #1 off-screen on right arrow click", async () => {
    const right = await page.$("button.button-Related-right");
    await right.evaluate(right => right.click());
    const product1 = await page.$("img.image-Related-product-1");
    await expect(product1).toBeFalsy();
  });

  it("should have left arrow hidden by default", async () => {
    var left = await page.$("button.button-Related-left");
    await expect(left).toBeFalsy();
  });

  it("should render left arrow upon right arrow 'click' occurence", async () => {
    var right = await page.$("button.button-Related-right");
    await right.evaluate(right => right.click());
    var left = await page.$("button.button-Related-left");
    await expect(left).toBeTruthy();
  });

  it("should correctly click arrows and eventually get Product #1 back on-screen", async () => {
    var right = await page.$("button.button-Related-right");
    await right.evaluate(right => right.click());
    var left = await page.$("button.button-Related-left");
    await left.evaluate(left => left.click());
    var product1 = await page.$("img.image-Related-product-1");
    await expect(product1).toBeTruthy();
  });
});
