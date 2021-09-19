require("express-async-errors");
const path = require("path");
const express = require("express");
const connectToDatabase = require("./config/mongodb");
const errorHandler = require("./middleware/errorHandler");
const articles = require("./routes/articles");

// Don't use dotenv package in production
const env = process.env.NODE_ENV || "development";
if (env !== "production") require("dotenv").config({ path: "./config/.env" });

const app = express();

// Parse incoming json data
app.use(express.json());

// Serve static files
app.use(express.static("public"));

// Routes
app.use("/api/articles", articles);

// Connect the react app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Error handler
app.use(errorHandler);

// Mongodb connection config
const mongodbURI = process.env.MONGODB_URI;
connectToDatabase(mongodbURI);

// Listen for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`${env} - Listening on port ${port}...`);
});
