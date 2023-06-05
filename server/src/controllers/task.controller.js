import { deleteAll, deleteTask, getAll, createTask } from "../services/task.service.js"

export async function getAllTasks(req, res) {
    try {
        const tasks = await getAll()
        res.json(tasks)
    } catch (error) {
        res.json({ error: error.message })
    }
}

export async function createOneTask(req, res) {
    const { body } = req
    try {
        const newTask = await createTask(body)
        res.json({ message: 'tarea creada exitosamente', newTask })
    } catch (error) {
        res.json({ error: error.message })
    }
}

export async function deleteOneTask(req, res) {
    const { id } = req.params
    try {
        const deletedTask = await deleteTask(id)
        res.json({ message: 'tarea eliminada exitosamente', deletedTask })
    } catch (error) {
        res.json({ error: error.message })
    }
}

export async function deleteAllTasks(req, res) {
    try {
        const deletedTasks = await deleteAll()
        res.json({ message: 'tareas eliminadas exitosamente' })
    } catch (error) {
        res.json({ error: error.message })
    }
}
