const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 24,
        trim: true,
        required: true,
    },
});

const Category = model("Category", categorySchema);

module.exports = Category;
