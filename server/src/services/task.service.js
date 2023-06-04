import { TaskManager } from "../DAOs/mongoMgr/TaskManager.js";

const taskManager = new TaskManager()

export async function getAll() {
    try {
        const tasks = await taskManager.getAll()
        return tasks
    } catch (error) {
        console.log(error)
    }
}

export async function createTask(obj) {
    try {
        const newTask = await taskManager.create(obj)
        return newTask
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTask(id) {
    try {
        const taskDeleted = await taskManager.deleteOne(id)
        return taskDeleted
    } catch (error) {
        console.log(error)
    }
}

export async function deleteAll() {
    try {
        const tasksDeleted = await taskManager.deleteAll()
        return
    } catch (error) {
        console.log(error)
    }
}




