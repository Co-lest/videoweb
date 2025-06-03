import { Testimonial } from "../models/database.js";

const handleApprove = async (req, res) => {

  try {
    const item = await Testimonial.findOneAndUpdate(
      { _id: req.params.id },
      { approved: req.body.approved },
      { new: true }
    );
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export default handleApprove;