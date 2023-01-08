import dbConnect from "../../../util/mongo";
import Visitor from "../../../models/Visitor";


const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const visitor = await Visitor.find();
      res.status(200).json(visitor);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const visitor = await Visitor.create(req.body);
      res.status(201).json(visitor);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
