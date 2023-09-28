const router = require('express').Router()
const UserController = require('../controller/userController')




//Pembuatan register

router.get('/register', UserController.registerForm)
router.post('/register')
















module.exports = router;