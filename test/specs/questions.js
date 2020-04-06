const root = async () => await page.$("#root");

const load = async () => {
  await page.goto(URL, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
};

const getQuestionsTitle = async () => {
  const app = await root();
  return await app.$eval(".questionsTitle", (el) => el.innerText);
};

describe("Questions", () => {
  beforeEach(async () => {
    await load();
  });

  it("should show the correct title: 'QUESTIONS & ANSWERS'", async () => {
    expect(await getQuestionsTitle()).toBe("QUESTIONS & ANSWERS");
  });

  it("should add a question", async () => {
    var addQuestionButton = await page.$(".askQuestionButton");
    await addQuestionButton.evaluate((addQuestionButton) => addQuestionButton.click());
    await page.type("input[name=question]", "this is my jest test question", { delay: 20 });
    await page.type("textarea[name=question]", "this is my jest test question? huh?", { delay: 20 });
    await page.type("input[name=nickname]", "jest test nickname", { delay: 20 });
    await page.type("input[name=email]", "jest@test.com", { delay: 20 });
    var submitQuestionButton = await page.$(".submitQuestionButton");
    await submitQuestionButton.evaluate((submitQuestionButton) => submitQuestionButton.click());
  });
});
