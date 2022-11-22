import eventsModel from "../models/eventsModel.js";

const getEvents = async (req, res) => {
  const events = await eventsModel.getEvents();

  res.status(200).send(events);
};

export default {
  getEvents,
}