import { load, getTitle } from "../pageObjects/index";

describe("React Redux App", () => {
  it("should be titled React Redux App", async () => {
    await load();
    expect(await getTitle()).toBe("React Redux App");
  });
});
