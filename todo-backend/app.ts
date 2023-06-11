import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dbConnection from './src/config/dbConnection'
import { errorHandlerResponse } from './src/handlers/errorHandler'
import { router } from './src/routes'

const PORT = process.env.PORT ?? 8000

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(router)
app.use(errorHandlerResponse)

dbConnection()

app.listen(PORT, () => {
  console.log(`Server developoming on port http://localhost:${PORT}`)
})
