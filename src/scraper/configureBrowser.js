import puppeteer from "puppeteer";

const configureBrowser = async () => {
  const { URL } = process.env;

  const browser = await puppeteer.launch({headless: true});

  const page = await browser.newPage();

  await page.goto(URL, {waitUntil: 'networkidle2'});

  return {page, browser};
};

export default configureBrowser;
