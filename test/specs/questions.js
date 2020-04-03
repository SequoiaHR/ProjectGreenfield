import { getQuestionsTitle } from "../pageObjects/questions";
import { load } from "../pageObjects/index";

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