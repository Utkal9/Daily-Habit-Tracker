const Habit = require("../models/habits");

// GET /
module.exports.home = function (req, res) {
    Habit.find({ user: req.session.user._id }, function (err, habits) {
        if (err) {
            console.log("Error in fetching habits");
            return;
        }
        return res.render("home", {
            title: "Habit Tracker App",
            habit_list: habits,
        });
    });
};

// POST /create-habit
module.exports.createHabit = function (req, res) {
    let days = {
        one: "none",
        two: "none",
        three: "none",
        four: "none",
        five: "none",
        six: "none",
        seven: "none",
    };
    Habit.create(
        {
            habit: req.body.habit,
            end: req.body.end,
            description: req.body.description,
            frequency: req.body.frequency,
            date: Date(),
            time: req.body.time,
            days: days,
            user: req.session.user._id, // associate with logged-in user
        },
        function (err, newHabit) {
            if (err) {
                console.log("Error in creating habit", err);
                return;
            }
            return res.redirect("back");
        }
    );
};

// GET /delete-habit
module.exports.deleteHabit = function (req, res) {
    let id = req.query.id;
    Habit.findOneAndDelete(
        { _id: id, user: req.session.user._id },
        function (err) {
            if (err) {
                console.log("Error in deleting habit");
                return;
            }
            return res.redirect("back");
        }
    );
};
