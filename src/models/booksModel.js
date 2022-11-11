import main from "../scraper/index.js";

let books = null;

const getBooks = async () => {
  books = await main();
  return books;
};

const getRecommendedBooks = async () => {
  const books = await main();
  const recommendedBooks = books.filter(({title}) => {
    return title == "A Capela de Três Vendas de Catuipe" || title == "Jornada de um Caboclo" || title == "Lições da Barbearia: Crônicas de Gols, C..." || title == "Sala de Espera - a Metamorfose do Amor"
  });
  return recommendedBooks;
};

export default {
  getBooks,
  getRecommendedBooks,
}