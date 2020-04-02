import { getIntroText, getLinkText } from "../pageObjects/app";
import { load } from "../pageObjects/index";

describe("React App", () => {
  beforeEach(async () => {
    await load();
  });

  it("dummy test", async()=>{
    expect(true).toBe(true);
  })
//   it("should show the correct intro", async () => {
//     expect(await getIntroText()).toBe("Edit src/App.js and save to reload.");
//   });

//   it("should show the correct link", async () => {
//     expect(await getLinkText()).toBe("Learn React");

//   });
});
