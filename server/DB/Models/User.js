const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    name: String,
    isAdmin: Boolean,
    isActive: Boolean,
    email: String,
    username: String,
    password: String,
    image: String,
}, {
    timestamps: true,
});

User = mongoose.model("User", UserSchema, "Users");
module.exports = User;

