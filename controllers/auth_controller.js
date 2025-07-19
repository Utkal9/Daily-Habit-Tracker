const User = require("../models/user");
const bcrypt = require("bcrypt");

// GET /register
module.exports.registerPage = (req, res) => {
    return res.render("register", { title: "Register" });
};

// POST /register
module.exports.register = async (req, res) => {
    try {
        const { name, email, password, confirm_password } = req.body;
        if (password !== confirm_password) {
            return res.send("Passwords do not match!");
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send("Email already registered!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });

        return res.redirect("/login");
    } catch (err) {
        console.log(err);
        return res.send("Error registering user");
    }
};

// GET /login
module.exports.loginPage = (req, res) => {
    return res.render("login", { title: "Login" });
};

// POST /login
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.send("Invalid credentials");
        }

        req.session.user = user;
        return res.redirect("/");
    } catch (err) {
        console.log(err);
        return res.send("Login failed");
    }
};

// GET /logout
module.exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) console.log(err);
        res.redirect("/login");
    });
};
