import { BudgetManager } from '../DAOs/mongoMgr/BudgetManager.js'


const budgetManager = new BudgetManager()


export async function createBudget(obj) {
    try {
        const newBudget = await budgetManager.createOne(obj)
        return newBudget
    } catch (error) {
        console.log(error)
    }
}

export async function getBudget(id) {
    try {
        const budget = await budgetManager.getOne(id)
        return budget
    } catch (error) {
        console.log(error)
    }
}

export async function getAllBudget() {
    try {
        const budgets = await budgetManager.getAll()
        return budgets
    } catch (error) {
        console.log(error)
    }
}

export async function updateBudget(id, inc, out) {
    try {
        const budget = await budgetManager.getOne(id)
        if (!budget) {
            throw new Error('No se encontro el presupuesto')
        }

        // Calcula la suma total de ingresos
        const totalInc = inc.reduce((acc, item) => acc + item.amount, 0)

        // Calcula la suma total de gastos
        const totalOut = out.reduce((acc, item) => acc + item.amount, 0)

        // Actualiza currentAmount
        budget.currentAmount = budget.currentAmount + (totalInc - totalOut)

        // Actuliza los ingresos y gastos
        budget.income = inc
        budget.outgoing = out


        await budgetManager.updateOne(id, inc, out)
        return budget
    } catch (error) {
        console.log(error)
    }
}

export async function deleteBudget(id) {
    try {
        const deletedBudget = await budgetManager.deleteOne(id)
        return deletedBudget
    } catch (error) {
        console.log(error)
    }
}


