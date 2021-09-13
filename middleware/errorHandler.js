// Handle errors caught by next()
const errorHandler = (err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        message: "Something went wrong! please try again later.",
    });
};

module.exports = errorHandler;
