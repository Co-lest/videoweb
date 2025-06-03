import { Testimonial } from "../models/database.js";

const handleDeleteTest = async (req, res) => {
    try {
        await Testimonial.findOneAndDelete({ _id: req.params.id });
        res.json({ message: "Item deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default handleDeleteTest;