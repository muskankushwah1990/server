const express = require("express")
const UserController = require('../controllers/UserController');
const User = require("../controllers/UserController");
const router = express.Router();

router.post('/insertUser', UserController.insertUser)
router.get('/getAllUser', UserController.getAllUser)
router.get('/viewUser/:id', UserController.viewUser)
router.get('/getUser/:id', UserController.getUserById)
router.post('/updateUser/:id', UserController.updateUser)
router.get('/deleteUser/:id', UserController.deleteUser)




module.exports = router;