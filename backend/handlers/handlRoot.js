import { Testimonial } from "../models/database.js";

const handleRoot = async (req, res) => {
    try {
        const items = await Testimonial.find();
        res.json(items);
        console.log("Fetched reviews: ", items);
    } catch(err) {
        res.status(500).json({ message: err.message });
        console.error("Error getting root info!");
    }
}

export default handleRoot;
