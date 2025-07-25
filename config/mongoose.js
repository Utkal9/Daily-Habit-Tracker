require("dotenv").config();
const mongoose = require("mongoose");
// connecting to mongoose
// add your mongodb
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});
// mongoose database connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDb"));

db.once("open", function () {
    console.log("Connected to MongoDB");
});

module.exports = db;
