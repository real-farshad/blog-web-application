const mongoose = require("mongoose");

const connectToDatabase = (mongodbURI) => {
    mongoose
        .connect(mongodbURI)
        .then(() => {
            // Handle disconnections
            mongoose.connection.on("disconnected", () => {
                console.log("Disconnected from mongodb!");
            });

            // Handle reconnections
            mongoose.connection.on("reconnected", () => {
                console.log("Reconnected to mongodb...");
            });

            // Handle errors after initial connection
            mongoose.connection.on("error", (err) => {
                console.log(err);
            });

            // Mongoose config
            // findOneAndUpdate, findByIdAndUpdate and findOneAndReplace will return
            // the updated document instead of the original one
            mongoose.set("returnOriginal", false);

            console.log("Connected to mongodb...");
        })
        .catch((err) => {
            // Handle errors on initial connection
            console.log(err);
        });
};

module.exports = connectToDatabase;
