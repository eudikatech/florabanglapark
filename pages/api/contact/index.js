import dbConnect from "../../../util/mongo";
import Contact from "../../../models/Contact";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const contact = await Contact.find();
      res.status(200).json(contact);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const contact = await Contact.create(req.body);
      res.status(201).json(contact);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
