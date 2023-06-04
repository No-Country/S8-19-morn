import { Router } from "express";
import { createOneTask, deleteAllTasks, deleteOneTask, getAllTasks } from "../controllers/task.controller.js";

const router = Router()

// get
router.get('/', getAllTasks)

// post
router.post('/create', createOneTask)

// delete
router.delete('/:id', deleteOneTask)
router.delete('/', deleteAllTasks)


export default router






