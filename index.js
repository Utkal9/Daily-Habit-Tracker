// Load environment variables
require("dotenv").config();

// Core modules and server
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// DB Connection
const db = require("./config/mongoose");

// Path & Layouts
const path = require("path");
const expressLayout = require("express-ejs-layouts");

// Sessions
const session = require("express-session");
const MongoStore = require("connect-mongo");

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Layout settings
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "assets")));
app.use(expressLayout);

// Session configuration
app.use(
    session({
        name: "habit_tracker_session",
        secret: process.env.SESSION_SECRET || "mysecretkey",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        },
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
            autoRemove: "interval",
            autoRemoveInterval: 10, // every 10 minutes
        }),
    })
);

// Make user available in views
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth")); // auth routes

// Start server
app.listen(port, (err) => {
    if (err) {
        console.log(`❌ Error in starting server: ${err}`);
        return;
    }
    console.log(`✅ Server running on port: ${port}`);
});
