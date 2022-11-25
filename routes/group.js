const express = require("express");
const groupController = require("../controllers/group");
const router = express.Router();
const userAuthentication = require("../middleware/auth");

router.post('/createGroup',userAuthentication.authenticate,groupController.createGroup)

router.get('/getGroupChat',userAuthentication.authenticate,groupController.groupdetails)

router.post('/getmessage',userAuthentication.authenticate,groupController.getMessage)

router.post('/postmessage/:id',userAuthentication.authenticate,groupController.postMessage)

router.get('/getmessage/:id',groupController.getMessage)

router.post('/AddUser/:id',groupController.addUser)

router.get('/getUser/:id',groupController.getUser)

router.delete('/deleteUser',groupController.deleteUser)


module.exports = router;