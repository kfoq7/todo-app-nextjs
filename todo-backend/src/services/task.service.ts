import { taskModel } from '@/models'
import type { ITask } from '@/types'

export const getTasks = async () => {
  return await taskModel.find({})
}

export const getTaskById = async (id: string) => {
  return await taskModel.findById(id)
}

export const createTask = async (data: ITask) => {
  return await taskModel.create(data)
}

export const updateTask = async (id: string, data: ITask) => {
  return await taskModel.findByIdAndUpdate(id, data, { new: true })
}

export const deleteTask = async (id: string) => {
  return await taskModel.findByIdAndDelete(id)
}
