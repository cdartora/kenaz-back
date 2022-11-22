import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import apicache from "apicache";
import dotenv from "dotenv";
dotenv.config();

import books from "./routes/books.js";
import events from "./routes/events.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

const cache = apicache.middleware;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(cache("1 day"));

app.use("/books", books);
app.use("/events", events);

app.use(errorHandler);

const {PORT} = process.env; 

app.listen(PORT, () => {
  console.log(`Servidor ouvindo porta ${PORT}`);
});
