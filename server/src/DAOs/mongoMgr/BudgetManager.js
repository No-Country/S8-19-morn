import { budgetModel } from '../models/budget.model.js'

export class BudgetManager {

    async createOne(obj) {
        try {
            const budget = await budgetModel.create(obj)
            return budget
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getOne(id){
        try {
            const budget= await budgetModel.find(id)
            return budget
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getAll(){
        try {
            const budgets= await budgetModel.find()
            return budgets
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async updateOne(id,inc,out){
        try {
            const updateBudget = await budgetModel.findByIdAndUpdate(id,inc,out)
            return updateBudget
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async deleteOne(id){
        try {
            const budgetDeleted = await budgetModel.findByIdAndDelete(id)
            return budgetDeleted
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }



}
