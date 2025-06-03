import mongoose from "mongoose";
import { portfolioDB } from "../handlers/connectdb.js";

const ItemSchema1 = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['video', 'photo', 'article']
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    thumbnailUrl: {
        type: String,
        required: true
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

// Changed to regular function to maintain 'this' context
ItemSchema1.pre("save", async function(next) {
    if (!this.isNew) return next();
    
    try {
        const lastItem = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
        this.id = lastItem ? lastItem.id + 1 : 1;
        next();
    } catch (error) {
        next(error);
    }
});

export const Portfolio = portfolioDB.model("Portfolio", ItemSchema1, "portfolio");