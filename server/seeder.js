import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import workers from './data/workers.js'
import User from './models/userModel.js'
import Worker from './models/workerModel.js'
import Hire from './models/hireModel.js'
import connectDB from './config/db.js'
import { async } from 'rxjs'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Hire.deleteMany()
    await Worker.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    const sampleWorkers = workers.map((worker) => {
      return { ...worker, user: adminUser }
    })

    await Worker.insertMany(sampleWorkers)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Hire.deleteMany()
    await Worker.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
