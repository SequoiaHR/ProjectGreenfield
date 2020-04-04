const load = async () => {
  await page.goto(URL, {
    waitUntil: "networkidle0",
    timeout: 60000
  });
};

const getTitle = async () => await page.title();

describe("Sequoia Shop", () => {
  it("should be titled Sequoia Shop", async () => {
    await load();
    expect(await getTitle()).toBe("Sequoia Shop");
  });
});
