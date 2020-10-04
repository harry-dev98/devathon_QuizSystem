const mongoose = require("mongoose");

let ExamSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    window: String,
    duration: String,
    startTime: String,
});

let QuestionSchema = new mongoose.Schema({
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam"
    },
    ques: String,
    qtype: String,
    maxmarks: String,
    negmarks: String,
    partialmarks: String,
    options: [{
        type: String,
    }, ],
    correctAns: [{
        type: String,
    }, ],
    giveAns: [{
        type: String,
    }, ],
    file: String,
    
});

Exam = mongoose.model("Exam", ExamSchema, "Exams");
Question = mongoose.model("Question",
QuestionSchema, "Questions");

module.exports = {
    Exam,
    Question,
}