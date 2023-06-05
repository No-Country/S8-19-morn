import { mongoose } from "mongoose";


const taskSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    type: { type: String },
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now }
})


export const taskModel = mongoose.model('Task', taskSchema)



