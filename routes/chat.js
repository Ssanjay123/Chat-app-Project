const express = require("express");
const chatController = require("../controllers/chat");
const router = express.Router();
const userAuthentication = require("../middleware/auth");

router.post("/addchats",userAuthentication.authenticate,chatController.addchats)
router.get("/getchats",userAuthentication.authenticate,chatController.getChats)

module.exports = router;