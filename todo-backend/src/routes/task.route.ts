import { Router } from 'express'
import {
  getTaskController,
  getTaskByIdController,
  createTaskController,
  updateTaskController,
  deleteTaskController
} from '@/controllers/task.controller'

const router = Router()

router.get('/', getTaskController)

router.get('/:taskId', getTaskByIdController)

router.post('/', createTaskController)

router.put('/:taskId', updateTaskController)

router.delete('/:taskId', deleteTaskController)

export { router }
