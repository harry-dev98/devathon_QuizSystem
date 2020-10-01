const mongoose = require("mongoose");

let ScoreSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    Exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    answers: [{
        type: String,
    }, ],
    file: String,
    marks: String,
});

Score = mongoose.model("Score", ScoreSchema, "Scores");
module.exports = Score;