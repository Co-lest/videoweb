import { Portfolio } from "../models/portfolio.js";

const handleDeletePort = async (req, res) => {
    try {
        await Portfolio.findOneAndDelete({ _id: req.params.id });
        res.json({ message: "Item deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default handleDeletePort;