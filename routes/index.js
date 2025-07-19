const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
const { requireLogin } = require("../middlewares/auth"); // <-- new

// Protect all habit-related routes
router.get("/", requireLogin, homeController.home);
router.post("/create-habit", requireLogin, homeController.createHabit);
router.get("/delete-habit", requireLogin, homeController.deleteHabit);

// Habits detail view
router.use("/details", requireLogin, require("./details"));

module.exports = router;
