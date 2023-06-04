import express from 'express'
import cors from 'cors'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'
import './DAOs/dbConfig.js'
import { __dirname } from './utils.js'
import config from './config.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'

import mongoose from 'mongoose'



// Routes
import budgetRouter from './routes/budget.router.js'




const app = express()
const PORT = config.port
import usersRouter from "./routes/user.router.js"; 

// Setup de aplicacion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/users',usersRouter)







// Mongo sesion
app.use(
    session({
        store: MongoStore.create({
            mongoUrl: config.mongo_uri
        }),
        resave: false,
        saveUninitialized: false,
        secret: 'sessionKey',
        cookie: { max: 60000 }
    }))



// Routes
app.use('/budget', budgetRouter)



// Error de routing
app.all('*', (req, res) => {
    res.send('<h1>PAGINA NO ENCONTRADA</h1>')
})

app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT} => http://localhost:${PORT}`)
})





