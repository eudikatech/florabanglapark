import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  visitorName: String,
  visitorEmail: String,
  visitorPhone: String,
  startDate: String,
  numberOfVisitor: String,
});

const Visitor = mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);

export default Visitor;
