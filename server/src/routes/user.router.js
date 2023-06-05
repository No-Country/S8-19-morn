import express from'express';

//controllers
import {
    createUser,
    login,
    getUserById
} from '../controllers/user.controller.js'

const usersRouter = express.Router();

usersRouter.post("/login", login)
usersRouter.post("/", createUser)
usersRouter.get('/:id', getUserById)


export default  usersRouter