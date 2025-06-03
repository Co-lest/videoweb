import Joi from "joi";
import { Portfolio } from "../models/portfolio.js";

const portfolioSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().valid('video', 'photo', 'article').required(),
    thumbnailUrl: Joi.string().required(),
    link: Joi.string().uri().allow("")
});

const handlePortfolio = async (req, res) => {
    const { error, value } = portfolioSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ 
            error: "Validation failed",
            details: error.details[0].message 
        });
    }

    try {
        const newPortfolio = new Portfolio({ 
            title: value.title,
            description: value.description,
            category: value.category,
            thumbnailUrl: value.thumbnailUrl,
            link: value.link
        });

        const savedItem = await newPortfolio.save();
        return res.status(201).json({
            message: 'Portfolio item created successfully',
            item: savedItem
        });

    } catch(err) {
        console.error("Database Error:", err);
        return res.status(500).json({
            message: "Error saving portfolio item",
            error: err.message,
        });
    }
}

export default handlePortfolio;
