const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controller");

// Registration routes
router.get("/register", authController.registerPage);
router.post("/register", authController.register);

// Login routes
router.get("/login", authController.loginPage);
router.post("/login", authController.login);

// Logout
router.get("/logout", authController.logout);

module.exports = router;
