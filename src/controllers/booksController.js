import booksModel from "../models/booksModel.js";

const getBooks = async (_req, res) => {
  const books = await booksModel.getBooks();
  return res.status(200).send(books);
};

const getRecommendedBooks = async (_req, res) => {
  const recommendedBooks = await booksModel.getRecommendedBooks();
  return res.status(200).send(recommendedBooks);
};

export default {
  getBooks,
  getRecommendedBooks,
}