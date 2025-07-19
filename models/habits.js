const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
    {
        habit: String,
        end: String,
        description: String,
        frequency: String,
        date: String,
        time: String,
        streak: {
            type: Number,
            default: 0,
        },
        days: {
            one: String,
            two: String,
            three: String,
            four: String,
            five: String,
            six: String,
            seven: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;
