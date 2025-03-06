const express = require("express");
const router = express.Router();
const User = require("../controllers/userControllers");

router.route('/')
.get(User.getAllUsers)
.post(User.createUser);

router.route('/:id')
.get(User.getUserById)
.patch(User.updateUser)
.delete(User.deleteUser);

module.exports = router;