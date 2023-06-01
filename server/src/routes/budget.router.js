import { Router } from "express"
import { createOneBudget, getOneBudget, updateOneBudget, deleteOneBudget } from "../controllers/budget.controller.js"


const router = Router()

// get
router.get('/', getOneBudget)

// post
router.post('/create', createOneBudget)

// put
router.put('/:id', updateOneBudget)

// delete
router.delete('/:id', deleteOneBudget)

export default router




