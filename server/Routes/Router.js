var router = require("express").Router();

const UserRouter = require("./Login");
const PostRouter = require("./Exam");
const MatchRouter = require("./Score");

router.use("/user", UserRouter);
// router.use("/post", PostRouter);
// router.use("/match", MatchRouter);

router.get("/", (req, res) => {
  res.send("WELCOME TO API ;)");
});

module.exports = router;
