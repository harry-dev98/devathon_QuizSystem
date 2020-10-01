const User = require('./Models/User');
const {Course, UserCourse} = require('./Models/Course');
const {Exam, Question} = require('./Models/Exam');
const Score  = require('./Models/Score');

module.exports = {
    User,
    Course,
    UserCourse,
    Exam,
    Question,
    Score,
};