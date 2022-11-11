import utils from "./utils.js";

const scrapeLinks = async (page) => {
  const links = await page.$$eval(
      "a.link-exemplar",
      a => a.map(link => link.href),
    );

  return links;
};

const scrapeTitles = async (page) => {
  const titles = await page.$$eval("div.titulo-autor > h2", (h2) => {
    return h2.map(title => title.innerText)
  });

  return titles;
};

const scrapeAuthors = async (page) => {
  const authors = await page.$$eval("span.autor", (span) => {
    return span.map(author => author.innerText.slice(0, -1))
  });

  return authors;
};

const scrapeYear = async (page) => {
  const year = await page.$$eval("span.ano-editora", (span) => {
    return span.map(year => year.innerText)
  });

  return year;
};

const scrapeCovers = async (page) => {
  const covers = await page.$$eval("div.capa__img > img", (img) => {
    return img.map(cover => cover.src)
  });

  return covers;
};

const scrapeBooks = async (page) => {
  await utils.scrollDown(page);

  const titles = await scrapeTitles(page);

  const authors = await scrapeAuthors(page);

  const year = await scrapeYear(page);


  const covers = await scrapeCovers(page);

  const links = await scrapeLinks(page);

  return titles.map((title, index) => {
    return {
      title,
      author: authors[index],
      year: year[index],
      cover: covers[index],
      url: links[index]
    }
  });
};

export default scrapeBooks;
