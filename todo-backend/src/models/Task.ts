import { Schema, model } from 'mongoose'
import type { ITask } from '@/types'

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const taskModel = model<ITask>('task', taskSchema)

export default taskModel
