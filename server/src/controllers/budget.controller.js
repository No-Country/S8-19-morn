import { getBudget, createBudget, deleteBudget, updateBudget } from "../services/budget.service.js";


export async function createOneBudget(req,res){
    try {
        const { type, user, amount, income, outgoing, date}= req.body
        if(!type || !user || !amount){
            console.log('Budget incomplete')
            res.send('Budget incomplete')
        } else {
            const newBudget = req.body
            const addBudget= await createBudget(newBudget)
            res.json({message:'budget created', addBudget})
        }
    } catch (error) {
        console.log('Loading error')
    }
}

export async function getOneBudget(req,res){
    try {
        const budget = await getBudget()
        res.json(budget)
    } catch (error) {
        console.log('Error detected')
    }
}

export async function updateOneBudget(req,res){
    const id = req.params.idBudget
    try {
        const updatedBudget = await updateBudget({_id : id})
        if(!updatedBudget){
            res.json({message:'budget not found'})
        } else {
            res.json({message:'budget updated', updatedBudget})
        }
    } catch (error) {
        console.log('Error detected')
    }
}

export async function deleteOneBudget(req,res){
    const id = req.params.idBudget
    try {
        const deletedBudget = await deleteBudget({_id: id})
        if(!deleteBudget){
            res.json({message:'budget not found'})
        } else {
            res.json({message:'budget deleted'})
        }
    } catch (error) {
        console.log('Error detected')
    }
}




