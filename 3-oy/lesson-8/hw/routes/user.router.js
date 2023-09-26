const express = require("express");

//ctr
const {  updateUser,getUser } = require("../ctr/user.ctr.js");


const router = express.Router();
router.route("/update-user").put( updateUser);
router.route("/users").get(getUser);

module.exports = router;
