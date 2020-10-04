const { createBulk } = require("../../Service/Login");

const mongoose = require("mongoose"),
bcrypt = require('bcrypt'),
saltFac = 10;

let UserSchema = new mongoose.Schema({
    name: String,
    isAdmin: Boolean,
    email: String,
    password: String,
}, {
    timestamps: true,
});

UserSchema.pre('save', async function(next){
    let user = this;
    console.log(user.isModified);
    if(!user.isModified('password'))return next();
    await bcrypt.genSalt(saltFac).then(async (salt)=>{
        await bcrypt.hash(user.password, salt)
        .then((hash)=>{
            user.password = hash;
            next();
        });
    }).catch((err)=>{
        return next(err);
    });
});

UserSchema.methods['isPassword'] = async function(pass){
    return await bcrypt.compare(pass, this.password);
}

User = mongoose.model("User", UserSchema, "Users");
module.exports = User;

