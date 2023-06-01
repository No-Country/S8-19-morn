import { mongoose } from "mongoose";

const budgetSchema = new mongoose.Schema({
    type: {type:String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    currentAmount: {type:Number, require: true},
    income: {
        detail: String,
        amount: Number
    },
    outgoing: {
        detail: String,
        amount: Number
    },
    date: { type: Date, default: Date.now },
    goal: {
        detail: String,
        amount_needed: Number
    }
})



export const budgetModel = mongoose.model('Budget', budgetSchema)
