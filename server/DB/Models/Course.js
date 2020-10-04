const mongoose = require("mongoose");

let CourseSchema = new mongoose.Schema({
    name: String,
    taughtBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

let UserCourseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    isActive: {
        type: Boolean,
        default: false,
    }
    
}, {
    timestamps:true
});

Course = mongoose.model("Course", CourseSchema, "Courses");
UserCourse = mongoose.model("UserCourse", UserCourseSchema, "UserCourses");
module.exports = {Course, UserCourse};