const express = require("express");

const sendcontroller = require("../controllers/mail");

const router = express.Router();

router.post("/sendmail",sendcontroller.sendMail);

module.exports = router;