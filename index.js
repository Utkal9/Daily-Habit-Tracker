// Load environment variables from .env
require("dotenv").config();

// Requiring express and creating port
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// Connect to database
const db = require("./config/mongoose");

// Path and Layout
const path = require("path");
const expressLayout = require("express-ejs-layouts");

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Extract styles and scripts from subpages to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "assets")));
app.use(expressLayout);

// Use router
app.use("/", require("./routes/index"));

// Start the server
app.listen(port, function (err) {
    if (err) {
        console.log(`❌ Error in starting the server: ${err}`);
        return;
    }
    console.log(`✅ Server is running on port: ${port}`);
});
