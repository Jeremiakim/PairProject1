const router = require('express').Router()
const UserController = require('../controller/userController')




//Pembuatan register

router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)


// Pembuatan Login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)

router.get('logout', UserController.getLogOut)






router.use(function(req, res, next) {
    console.log('LOGGED')
    if (!req.session.userId){
        const errors = 'Please Login First'
        res.redirect(`/login?error${errors}`,)
    }else{
        next()
    }
  })

// const isLogIn = (function(req, res, next) {
//     console.log('LOGGED')
//     if (!req.session.userId){
//         const error = 'Please Login First'
//         res.redirect(`/login?error${error}`)
//     }else{
//         next()
//     }
//   })

  const isAdmin = function(req, res, next) {
    console.log('ACCESS')
    if (req.session.userId && req.session.role === false){
        const error = 'You not have an Access'
        res.redirect(`/login?error${error}`)
    }else{
        next()
    }
  }

router.get('/',UserController.homePage)
















module.exports = router;