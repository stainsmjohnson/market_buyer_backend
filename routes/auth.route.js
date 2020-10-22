const express = require('express')
const router = express.Router()

//load controllers
const {
    registerController
} = require('../controllers/auth.controller')

router.post('/register', registerController)

module.exports = router