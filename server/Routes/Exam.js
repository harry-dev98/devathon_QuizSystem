var router = require("express").Router();

const {
    welcome,
    getExams,
    createBulk,
    createUser,
    login,
    updateUser,
    createCourse,
    registerCourse,
    getCourseForUser,
    getUsersInCourse,
    getUserByCourse,
    getCourseByUser,
    acceptUserInCourse,
    removeUserInCourse,

} = require("../Service/Login");

router.route("/").get(welcome); //tested OK
router.route("/users").get(getUsers); //tested OK
router.route("/addbulk").post(createBulk);
router.route("/add").post(createUser); //tested OK
router.route("/login").post(login); //tested OK
router.route("/update").put(updateUser); //tested OK
router.route("/createcourse").post(createCourse); //tested OK
router.route("/registercourse/:courseId/:userId").get(registerCourse); //tested OK
router.route("/getcourseforuser/:userId").get(getCourseForUser); //tested OK
router.route("/getusersincourse/:courseId").get(getUsersInCourse); //test OK
router.route("/getuserbycourse/:courseId").get(getUserByCourse); //tested OK
router.route("/getcoursebyuser/:userId").get(getCourseByUser); //tested OK
router.route("/acceptuserincourse/:courseId/:userId").get(acceptUserInCourse); // tested OK
router.route("/removeuserincourse/:courseId/:userId").get(removeUserInCourse); // tested OK

module.exports = router;