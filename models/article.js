const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 64,
        trim: true,
        required: true,
    },
    imageURL: {
        type: String,
        minlength: 3,
        maxlength: 256,
        required: true,
    },
    thumbnailURL: {
        type: String,
        minlength: 3,
        maxlength: 256,
        required: true,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 10000,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    viewCount: {
        type: Number,
        min: 0,
        required: true,
    },
    commentCount: {
        type: Number,
        min: 0,
        required: true,
    },
    relatedArticles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Article",
        },
    ],
});

const Article = model("Article", articleSchema);

module.exports = Article;
