import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema({
  contactPersonName: String,
  contactEmail: String,
  contactPhone: String,
  eventName: String,
  startDate: String,
  numberOfVisitor: String,
});

const Events = mongoose.models.Events || mongoose.model("Events", EventsSchema);

export default Events;
