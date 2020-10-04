const { model } = require("mongoose");
const {User} = require("../DB/Models");

module.exports = {
    welcome: async (req, res)=>{
        try {
            res.send("welcome to login api");
        } catch (e) {
            res.send(e);
        }
    }
}