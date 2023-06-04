import { mongoose } from "mongoose";


const budgetSchema = new mongoose.Schema({
    type: { type: String, require: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    currentAmount: { type: Number, require: true },
    income: [{
        detail: { type: String },
        amount: { type: Number },
        createdAt: { type: Date, default: Date.now }
    }],
    outgoing: [{
        detail: { type: String },
        amount: { type: Number },
        createdAt: { type: Date, default: Date.now }
    }],
    goal: {
        detail: { type: String },
        amount_needed: { type: Number },
        createdAt: { type: Date, default: Date.now }
    }
});


export const budgetModel = mongoose.model('Budget', budgetSchema)
