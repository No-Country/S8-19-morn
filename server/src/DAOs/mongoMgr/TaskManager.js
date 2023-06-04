import { taskModel } from "../models/task.model.js";

export class TaskManager {
    async getAll() {
        try {
            const tasks = await taskModel.find()
            return tasks
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getById(id) {
        try {
            const task = await taskModel.findById(id)
            return task
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async create(obj) {
        try {
            const newTask = await taskModel.create(obj)
        } catch (error) {
            console.log(object)
            throw new Error(error)
        }
    }

    async update(id, update) {
        try {
            const taskUpdated = await taskModel.findByIdAndUpdate(id, update)
            return taskUpdated
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async deleteAll() {
        try {
            const tasksDeleted = await taskModel.deleteMany({})
            return
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async deleteOne(id) {
        try {
            const taskDeleted = await taskModel.findByIdAndDelete(id)
            return taskDeleted
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
