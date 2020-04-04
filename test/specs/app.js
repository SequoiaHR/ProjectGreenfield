const root = async () => await page.$("#root");

const load = async () => {
  await page.goto(URL, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
};

// const introSelector = '.App-header > p';
// const linkSelector = '.App-link';

// export const getIntroText = async () => {
//   const app = await root();
//   return await app.$eval(introSelector, el => el.innerText);
// }

// export const getLinkText = async () => {
//   const app = await root();
//   return await app.$eval(linkSelector, el => el.innerText);
// }

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

  //   it("should show the correct intro", async () => {
  //     expect(await getIntroText()).toBe("Edit src/App.js and save to reload.");
  //   });

  //   it("should show the correct link", async () => {
  //     expect(await getLinkText()).toBe("Learn React");

  //   });
});
