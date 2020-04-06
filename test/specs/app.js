const root = async () => await page.$("#root");

const load = async () => {
  await page.goto(URL, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
};

describe("Test Suite Operating Correctly", () => {
  beforeEach(async () => {
    await load();
  });

  it("True is True", async () => {
    expect(true).toBe(true);
  });

  it("False is False", async () => {
    expect(true).toBe(true);
  });

});
