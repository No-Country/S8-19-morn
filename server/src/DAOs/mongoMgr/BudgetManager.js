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

    async getOne(){
        try {
            const budget= await budgetModel.find()
            return budget
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async updateOne(id,updateObj){
        try {
            const updateBudget = await budgetModel.findByIdAndUpdate(id,updateObj)
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