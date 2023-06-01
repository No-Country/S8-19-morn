import { BudgetManager } from '../DAOs/mongoMgr/BudgetManager.js'


const budgetManager = new BudgetManager()


export async function createBudget(obj){
    try {
        const newBudget = await budgetManager.createOne(obj)
        return newBudget
    } catch (error) {
        console.log(error)
    }
}

export async function getBudget(){
    try {
        const budget = await budgetManager.getOne()
        return budget
    } catch (error) {
        console.log(error)
    }
}

export async function updateBudget(id,obj){
    try {
        const updateBudget = await budgetManager.updateOne(id,obj)
        return updateBudget
    } catch (error) {
        console.log(error)
    }
}

export async function deleteBudget(id){
    try {
        const deletedBudget = await budgetManager.deleteOne(id)
        return deletedBudget
    } catch (error) {
        console.log(error)
    }
}


