var router = require("express").Router();

const UserRouter = require("./Login");
const ExamRouter = require("./Exam");
const ScoreRouter = require("./Score");

router.use("/user", UserRouter);
router.use("/exam", ExamRouter);
router.use("/score", ScoreRouter);

router.get("/", (req, res) => {
  res.send("WELCOME TO API ;)");
});

module.exports = router;
