import { getBudget, createBudget, deleteBudget, updateBudget, getAllBudget } from "../services/budget.service.js";


export async function createOneBudget(req, res) {
    try {
        const { type, currentAmount } = req.body
        if (!type || !currentAmount) {
            console.log('Budget incomplete')
            res.send('Budget incomplete')
        } else {
            const newBudget = req.body
            const addBudget = await createBudget(newBudget)
            res.json({ message: 'budget created', addBudget })
        }
    } catch (error) {
        console.log('Loading error')
    }
}

export async function getOneBudget(req, res) {
    try {
        const budget = await getBudget()
        res.json(budget)
    } catch (error) {
        console.log('Error detected')
    }
}

export async function getAllBudgets(req, res) {
    try {
        const allBudget = await getAllBudget()
        res.json(allBudget)
    } catch (error) {
        res.json({ error: error.message })
    }
}

export async function updateOneBudget(req, res) {
    const { income, outgoing } = req.body
    const { id } = req.params
    try {
        const updatedBudget = await updateBudget({ _id: id }, income, outgoing)
        if (!updatedBudget) {
            res.json({ message: 'budget not found' })
        } else {
            res.json({ message: 'budget updated', updatedBudget })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function deleteOneBudget(req, res) {
    const id = req.params.id
    try {
        const deletedBudget = await deleteBudget({ _id: id })
        if (!deleteBudget) {
            res.json({ message: 'budget not found' })
        } else {
            res.json({ message: 'budget deleted' })
        }
    } catch (error) {
        console.log('Error detected')
    }
}




