import configureBrowser from "./configureBrowser.js";
import scrapeBooks from "./scraper.js";
import utils from "./utils.js";

const main = async () => {
  const {page, browser} = await configureBrowser();

  const books = [];

  let nextButton = await page.evaluate(utils.isNextButtonOnPage);

  while (nextButton) {
    await page.waitForSelector("div.titulo-autor");

    const pageBooks = await scrapeBooks(page);

    books.push(...pageBooks);

    await page.click("a.next");

    nextButton = await page.evaluate(utils.isNextButtonOnPage);
  }

  browser.close();
  return books;
};

export default main;
