import { Router } from "express";
import eventsController from "../controllers/eventsController.js";

const events = Router();

events.get("/", eventsController.getEvents);

export default events;