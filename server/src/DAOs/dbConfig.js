import mongoose from 'mongoose'
import config from '../config.js'

const MONGO_URI = config.mongo_uri

try {
    await mongoose.connect(MONGO_URI)
    console.log('Conectando a la base de datos')
} catch (error) {
    console.log(error)
}



