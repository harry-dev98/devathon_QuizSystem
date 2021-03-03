const {User, Course, UserCourse} = require("../DB/Models");
const { use } = require("../Routes/Login");
const jwt = require("jsonwebtoken");

module.exports = {
    welcome: async (req, res)=>{
        try {
            res.send("welcome to login api");
        } catch (e) {
            console.log(e);res.status(502);
        }
    },
    getUsers : async (req, res) => {
        try {
            let result = await User.find().lean();
            res.status(200).json(result);
        } catch (e) {
            console.log(e);res.status(502);
        }
    },
    createBulk: async (req, res) => {
        try{
            await User.insertMany(req.body.data).then(
                (docs)=>{
                    res.status(200).json(docs);
                }
            );
        } catch (e) {
            console.log(e);res.status(502);
        }
    },
    createUser: async (req, res) =>{
        try{
            let data = {
                name: req.body.name,
                isAdmin: req.body.isAdmin,
                email: req.body.email,
                password: req.body.password,
            };
            console.log(req.body, req.params);
            let newUser = new User(data);
            await newUser.save().then((docs) => {
                docs.password = "secretly-hidden";
                res.status(200).json(docs);
            });
        } catch(e) {
            console.log(e);res.status(502);
        }
    },
    updateUser: async (req, res) =>{
        try{
            let _id = req.body.userId;
            console.log(_id);
            let data = {
                name: req.body.name,
                isAdmin: req.body.isAdmin,
                email: req.body.email,
                password: req.body.password,
            };
            await User.findById(_id, data, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    if(!result) res.status(404);
                    else{
                        result.name = data.name || result.name;
                        result.email = data.email || result.email;
                        result.password = data.password || result.password;
                        result.save().then((result)=>{
                            result.password = "secretly-hidden";
                            res.status(202).json(result);
                        }).catch((err)=>{
                            console.log(err);
                            res.status(502).send(err);
                        })
                    }
                }
            });
        } catch(e) {
            console.log(e);res.status(502);
        }
    },
    login: async (req, res) => {
        try {
            var email = req.body.email;
            var password = req.body.password;
            var user = await User.findOne({email});
            await user.isPassword(password).then(async (isMatch)=>{
                if (!isMatch) {
                    res.status(200).json({auth: false});
                } else {
                    var userdata = {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                    };
                    const accessToken = await jwt.sign(
                        userdata,
                        "randomstirngforsecurityissues",
                        {expiresIn: '24h'}
                    );
                    res.status(200).json({
                        accessToken,
                        auth: true,
                    });
                }
            });
            } catch (e){
                console.log(e);
                console.log(e);res.status(502);
            }
    },
    createCourse: async (req, res) =>{
        try{
            let data = {
                name: req.body.name,
                taughtBy: req.body.userId,
            };
            let newCourse = new Course(data);
            await newCourse.save().then((docs) => {
                res.status(200).json(docs);
            });
        } catch(e) {
            console.log(e);res.status(502);
        }
    },
    registerCourse: async (req, res) =>{
        try{
            let data = {
                user: req.params.userId,
                course: req.params.courseId,
            };
            let newUserCourse = new UserCourse(data);
            await newUserCourse.save().then((docs) => {
                res.status(200).json(docs);
            });
        } catch(e) {
            console.log(e);res.status(502);
        }
    },
    getCourseForUser: async (req, res) => {
        try{
            let user = req.params.userId;
            let result = await UserCourse.find({user: user}).lean();
            res.send(result);
        } catch (e) {
            console.log(e);res.status(502);
        }
    },
    getUsersInCourse: async (req, res) => {
        try{
            let course = req.params.courseId;
            let result = await UserCourse.find({course: course, isActive: true}).lean();
            let users = [];
            const fetchuser = async (userId)=>{
                let user_ = await User.findById({_id: userId});
                // console.log(user_);
                users.push(user_);
            }
            await Promise.all(result.map(async (item)=>{
                await fetchuser(item.user);
            }));
            res.status(200).send(users);
        } catch (e) {
            console.log(e);res.status(502);
        }
    },
    getUserByCourse: async (req, res) => {
        try{
            let course = req.params.courseId;
            let res_ = await Course.findOne({_id:course});
            console.log("cr", res_);
            if(res_ == null) res.status(404).json();
            else{
                let user = res_.taughtBy;
                await User.findOne({_id: user}).then((user)=>{
                    if(user == null) res.status(404);
                    else res.status(200).json(user);
                })
            }
        }catch (e) {
            console.log(e);res.status(502);
        }
    },
    getCourseByUser: async (req, res) => {
        try{
            let taughtBy = req.params.userId;
            let res_ = await Course.find({taughtBy});
            if(res_ == null){
                res.status(404).json({"none":"none"});
            } else{
                res.status(200).json(res_);
            }
        } catch (e) {
            console.log(e);res.status(502);
        }
    },

    acceptUserInCourse: async (req, res) => {
        try{
            var userId = req.params.userId;
            var courseId = req.params.courseId;
            await UserCourse.findOneAndUpdate({ course: courseId, user: userId }, {isActive: true}, function(err, result){
                if(err) {
                    console.log(err);
                    res.send(err);
                } else{
                    res.json("Updated!!");
                }
            });
        }catch (e) {
            console.log(e);res.status(502);
        }
    },
    removeUserInCourse: async (req, res) => {
        try{
            var userId = req.params.userId;
            var courseId = req.params.courseId;
            await UserCourse.findOneAndUpdate({ course: courseId, user: userId }, {isActive: false}, function(err, result){
                if(err) {
                    res.send(err);
                } else{
                    res.send("Updated!!");
                }
            });
        }catch (e) {
            console.log(e);res.status(502);
        }
    }, 

}


