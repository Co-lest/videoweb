import mongoose from "mongoose";
import { videowebDB } from "../handlers/connectdb.js";

const ItemSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

ItemSchema.pre("save", async function(next) {
    if (!this.isNew) return next();

    try {
        const lastItem = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
        this.id = lastItem ? lastItem.id + 1 : 1;
    } catch(err) {
        next(err);
    }
});

export const Testimonial = videowebDB.model("Testimonial", ItemSchema, "testimonials");

