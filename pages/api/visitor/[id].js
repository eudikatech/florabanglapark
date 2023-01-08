import dbConnect from "../../../util/mongo";
import Visitor from "../../../models/Visitor";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const visitor = await visitor.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const visitor = await Visitor.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(visitor);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
  }
};

export default handler;
