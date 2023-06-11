import type { Request, Response, NextFunction } from 'express'
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '@/services/task.service'

export const getTaskController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await getTasks()

    res.status(200).json({
      message: 'Task list',
      tasks
    })
  } catch (err) {
    next(err)
  }
}

export const getTaskByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await getTaskById(req.params.taskId)

    res.status(200).json({
      message: 'Task found',
      task
    })
  } catch (err) {
    next(err)
  }
}

export const createTaskController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await createTask(req.body)

    res.status(200).json({
      message: 'Task created',
      task
    })
  } catch (err) {
    next(err)
  }
}

export const updateTaskController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await updateTask(req.params.taskId, req.body)

    res.status(200).json({
      message: 'Task updated',
      task
    })
  } catch (err) {
    next(err)
  }
}

export const deleteTaskController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await deleteTask(req.params.taskId)

    res.status(200).json({
      message: 'Task deleted',
      task
    })
  } catch (err) {
    next(err)
  }
}
