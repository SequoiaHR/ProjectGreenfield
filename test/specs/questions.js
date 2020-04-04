const root = async () => await page.$("#root");

const load = async () => {
  await page.goto(URL, {
    waitUntil: "networkidle0",
    timeout: 60000
  });
};

const getQuestionsTitle = async () => {
  const app = await root();
  return await app.$eval('.questionsTitle', el => el.innerText);
}

describe("Questions", () => {
  beforeEach(async () => {
    await load();
  });

  it("should show the correct title", async () => {
    expect(await getQuestionsTitle()).toBe("QUESTIONS & ANSWERS");
  });

  // it("should add a question", async() => {

  // })

});