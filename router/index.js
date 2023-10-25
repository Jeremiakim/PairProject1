const Controller = require("../controller/controller");
const UserController = require("../controller/userController");


const router = require("express").Router();

//Pembuatan register

router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)
router.get('/registerProfile', UserController.ProfilForm)
router.post('/registerProfile', UserController.postProfil)


// Pembuatan Login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)

//Pembuatan LogOut
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


  const isAdmin = function(req, res, next) {
    console.log('ACCESS')
    if (req.session.userId && req.session.role === false){
        const error = 'You not have an Access'
        res.redirect(`/login?error${error}`)
    }else{
        next()
    }
  }



router.get("/", Controller.showHome);
router.get("/package/add", Controller.showForm);
router.post("/package/add", Controller.addPackage);
// router.get("/package/transaction", Controller.addPackage);
// router.post("/package/add", Controller.addPackage);
router.get("/calculate/:id", Controller.showPackage);
router.post("/calculate/:id", Controller.calculateTotalPrice);
router.get("/transaction", Controller.showTransactions);



module.exports = router;
