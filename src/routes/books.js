import { Router } from "express";
import booksController from "../controllers/booksController.js";

const books = Router();

books.get("/", booksController.getBooks);
books.get("/recommended", booksController.getRecommendedBooks);

export default books;