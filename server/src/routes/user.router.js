const express = require('express');

//controllers
const {
    createUser,
    login,
    getUserById
} = require('../controllers/user.controller')

const usersRouter = express.Router();

usersRouter.post("/login", login)
usersRouter.post("/", createUser)
usersRouter.get('/:id', getUserById)


module.exports = usersRouter