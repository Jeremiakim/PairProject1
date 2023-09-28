const router = require('express').Router()
const UserController = require('../controller/userController')




//Pembuatan register

router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)




// Pembuatan Login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)




router.get('/', UserController.homePage)
















module.exports = router;