const mongoose = require("mongoose");
const mockData = require("./mockData");
const Category = require("../models/category");
const Article = require("../models/article");

// Don't use dotenv's environment variables in production
const env = process.env.NODE_ENV || "development";
if (env !== "production") require("dotenv").config({ path: "./.env" });

async function populateDatabase() {
  try {
    // Connect to the database
    const mongodbURI = process.env.MONGODB_URI;
    await mongoose.connect(mongodbURI);

    // Clear the database, just to be sure there is no previous data in it
    const collections = mongoose.connection.collections;
    for (const key in collections) await collections[key].drop();

    // Insert list of categories to the category collection
    const categories = getCategoriesList();
    const formatedCategories = [];
    for (category of categories) formatedCategories.push({ title: category });
    await Category.insertMany(formatedCategories);

    // Insert articles into the database
    const articles = getArticlesList();
    for (article of articles) {
      const category = await Category.findOne({ title: article.category });
      article.category = category._id;
    }
    await Article.insertMany(articles);

    // Link the related articles
    const briefArticles = getRelatedArticles();
    for (briefArticle of briefArticles) {
      const relatedArticles = [];
      for (relatedArticle of briefArticle.relatedArticles) {
        const article = await Article.findOne({ title: relatedArticle });
        relatedArticles.push(article._id);
      }

      const title = briefArticle.title;
      await Article.findOneAndUpdate({ title }, { relatedArticles });
    }

    // Disconnect from the database
    await mongoose.connection.close();

    console.log("Database populated.");
  } catch (err) {
    console.log(err);
  }
}

populateDatabase();

//
//
//
//
// HELPERS
function getCategoriesList() {
  const categories = new Set();
  for (article of mockData) categories.add(article.category);
  return categories;
}

function getArticlesList() {
  const articles = [];
  for (article of mockData) {
    const {
      title,
      imageURL,
      thumbnailURL,
      description,
      category,
      viewCount,
      commentCount,
    } = article;
    articles.push({
      title,
      imageURL,
      thumbnailURL,
      description,
      category,
      viewCount,
      commentCount,
    });
  }
  return articles;
}

function getRelatedArticles() {
  const briefArticles = [];
  for (article of mockData) {
    const { title, relatedArticles } = article;
    briefArticles.push({ title, relatedArticles });
  }
  return briefArticles;
}
