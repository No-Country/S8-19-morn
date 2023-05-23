import express from 'express'
import cors from 'cors'
import MongoStore from 'connect-mongo'
import { __dirname } from './utils.js'
import config from './config.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'



const app = express()
const PORT = config.port


// Setup de aplicacion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(cors())


// Mongo sesion
app.use(
    session({
        store: MongoStore.create({
            mongoUrl: config.mongo_uri
        }),
        resave: false,
        saveUninitialized: false,
        secret: 'sessionKey',
        cookie: { max: 100000 }
    }))


// Routes





// Error de routing
app.all('*',(req,res) => {
    res.send('<h1>PAGINA NO ENCONTRADA</h1>')
})

app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT} => http://localhost:${PORT}`)
})





