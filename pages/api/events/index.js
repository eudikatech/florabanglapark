import dbConnect from "../../../util/mongo";
import Events from "../../../models/Events";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const events = await Events.find();
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const events = await Events.create(req.body);
      res.status(201).json(events);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
