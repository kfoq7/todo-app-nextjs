import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    const mongoURI = process.env.MONGO_URI

    await mongoose.connect(mongoURI ?? '')
    console.log('Mongoose connect')
  } catch (err) {
    console.log(err)
  }
}

export default dbConnection
