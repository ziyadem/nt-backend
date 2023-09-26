const { Router } = require("express");
const { POST } = require("../controller/user.contr");
const { CHECK, AUTH } = require("../middleware/user.middle");
const router = Router();

router.post("/register", CHECK, POST);

module.exports = router;
