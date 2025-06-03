import Joi from "joi";
import { Testimonial } from "../models/database.js";

const testimonySchema = Joi.object({
    quote: Joi.string().required(),
    author: Joi.string().required(),
    position: Joi.string().required(),
    imageUrl: Joi.string().required()
});

const handleTest = async (req, res) => {
    const { error, value } = testimonySchema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            error: "Validation failed",
            details: error.details[0].message 
        });
    }

    try {

        const newTestimonial = new Testimonial({ 
            author: value.author,
            imageUrl: value.imageUrl,
            quote: value.quote,
            position: value.position
        });

        const savedTestimonial = await newTestimonial.save();
        
        return res.status(201).json({
            message: 'Testimonial created successfully',
            testimonial: savedTestimonial
        });

    } catch(err) {
        console.error("Database Error:", err);
        return res.status(500).json({
            message: "Error saving testimonial",
            error: err.message
        });
    }
}

export default handleTest;