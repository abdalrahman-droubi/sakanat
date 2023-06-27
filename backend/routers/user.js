const express = require('express')
const router = express.Router()
const {getUser, updateUser,getOneUser} = require('../controllers/userController');
const verifyUser = require('../middleware/verifyUser');

/// ALL About Users
router.get('/getUser', verifyUser, getUser);
// router.get('/getOneUser/:id', getOneUser);
router.put('/updateUser/:id', updateUser)

module.exports = router