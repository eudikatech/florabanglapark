import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: String,
  textMsg: String,
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;