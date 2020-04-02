
export const root = async () => await page.$("#root");

export const load = async () => {
  await page.goto(URL, {
    waitUntil: "networkidle0",
    timeout: 60000
  });
};

export const getTitle = async () => await page.title();
