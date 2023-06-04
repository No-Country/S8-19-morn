import { Router } from "express"
import { createOneBudget, getOneBudget, updateOneBudget, deleteOneBudget, getAllBudgets } from "../controllers/budget.controller.js"


const router = Router()

// get
router.get('/', getAllBudgets)

// post
router.post('/create', createOneBudget)

// put
router.put('/:id', updateOneBudget)

// delete
router.delete('/:id', deleteOneBudget)

export default router




