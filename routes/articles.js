const express = require("express");
const mongoose = require("mongoose");
const Article = require("../models/article");

const router = express.Router();

router.get("/first-article", async (req, res) => {
    // Get the first page's article and populate it with referenced data
    const firstArticle = await Article.findOne({ title: "Making of The Witcher 3: Wild Hunt" })
        .populate("category", "-_id title")
        .populate({
            path: "relatedArticles",
            select: "title thumbnailURL category viewCount commentCount",
            populate: {
                path: "category",
                select: "-_id title",
            },
        });

    return res.json(firstArticle);
});

router.get("/:id", async (req, res) => {
    // Check for valid ObjectId
    const articleId = req.params.id;
    if (!articleId) return res.status(400).send("Article's id is required!");
    if (!mongoose.isValidObjectId(articleId)) return res.status(400).send("Invalid id!");

    // Find an article with this id and populate it with referenced data
    const article = await Article.findById(articleId)
        .populate("category", "-_id title")
        .populate({
            path: "relatedArticles",
            select: "title thumbnailURL category viewCount commentCount",
            populate: {
                path: "category",
                select: "-_id title",
            },
        });

    return res.json(article);
});

module.exports = router;
