const express = require('express')
const morgan = require('morgan')
const body_parser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()
require('dotenv').config({
    path: './config/config.env'
})
//connect db
connectDB()

//use body parser
app.use(body_parser.json())

if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}


//load all routes
const authRoute = require('./routes/auth.route')

//use routes
app.use('/api/auth',authRoute)

app.use((req,res,next) => {
    res.status(404).json({
        success: false,
        message: 'Page not found!'
    })
})



const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log('Started at port :'+PORT )
})